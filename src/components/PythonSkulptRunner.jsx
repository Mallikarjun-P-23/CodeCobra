import { useEffect, useRef } from 'react';

const PythonSkulptRunner = ({ code, onOutput, onError, dependencies }) => {
  const outputRef = useRef([]);
  const skulptLoaded = useRef(false);
  const isInitializing = useRef(true);

  useEffect(() => {
    loadSkulpt();
  }, []);

  const loadSkulpt = () => {
    if (window.Sk) {
      initializeSkulpt();
      return;
    }

    // Try different CDN sources
    const sources = [
      {
        core: "https://unpkg.com/skulpt@1.2.0/dist/skulpt.min.js",
        stdlib: "https://unpkg.com/skulpt@1.2.0/dist/skulpt-stdlib.min.js"
      },
      {
        core: "https://cdnjs.cloudflare.com/ajax/libs/skulpt/1.2.0/skulpt.min.js",
        stdlib: "https://cdnjs.cloudflare.com/ajax/libs/skulpt/1.2.0/skulpt-stdlib.min.js"
      },
      {
        core: "https://skulpt.org/js/skulpt.min.js",
        stdlib: "https://skulpt.org/js/skulpt-stdlib.js"
      }
    ];

    let currentSource = 0;

    const tryLoadSource = () => {
      if (currentSource >= sources.length) {
        console.error('All Skulpt sources failed to load');
        if (!isInitializing.current) {
          onError('Failed to load Python interpreter from all sources');
        }
        return;
      }

      const source = sources[currentSource];
      console.log(`Trying to load Skulpt from source ${currentSource + 1}:`, source.core);

      // Load Skulpt core
      const script1 = document.createElement('script');
      script1.src = source.core;
      script1.onload = () => {
        console.log('Skulpt core loaded successfully');
        // Load Skulpt stdlib
        const script2 = document.createElement('script');
        script2.src = source.stdlib;
        script2.onload = () => {
          console.log('Skulpt stdlib loaded successfully');
          initializeSkulpt();
        };
        script2.onerror = () => {
          console.error(`Failed to load Skulpt stdlib from source ${currentSource + 1}`);
          // Clean up failed scripts
          if (script1.parentNode) script1.parentNode.removeChild(script1);
          if (script2.parentNode) script2.parentNode.removeChild(script2);
          currentSource++;
          tryLoadSource();
        };
        document.head.appendChild(script2);
      };
      script1.onerror = () => {
        console.error(`Failed to load Skulpt core from source ${currentSource + 1}`);
        // Clean up failed script
        if (script1.parentNode) script1.parentNode.removeChild(script1);
        currentSource++;
        tryLoadSource();
      };
      document.head.appendChild(script1);
    };

    tryLoadSource();
  };

  const initializeSkulpt = () => {
    try {
      skulptLoaded.current = true;
      isInitializing.current = false;
      
      window.Sk.configure({
        output: (text) => {
          console.log('Output:', text);
          outputRef.current.push(text);
        },
        read: (filename) => {
          console.log('Reading file:', filename);
          if (window.Sk.builtinFiles && window.Sk.builtinFiles.files[filename]) {
            return window.Sk.builtinFiles.files[filename];
          }
          // Return empty string instead of throwing error during initialization
          return '';
        }
      });

      console.log('Skulpt initialized successfully');
    } catch (error) {
      console.error('Error initializing Skulpt:', error);
      if (!isInitializing.current) {
        onError('Failed to initialize Python interpreter');
      }
    }
  };

  useEffect(() => {
    console.log('PythonSkulptRunner received code:', code);
    console.log('Skulpt loaded:', skulptLoaded.current);
    console.log('Code length:', code?.length);
    console.log('Is initializing:', isInitializing.current);
    
    // Only execute if Skulpt is loaded, not initializing, and we have code
    if (skulptLoaded.current && !isInitializing.current && code && code.trim()) {
      console.log('About to execute Python code');
      executePython().catch(err => {
        console.error('Failed to execute Python:', err);
        onError(err.toString());
      });
    } else {
      console.log('Not executing - missing requirements or still initializing');
    }
  }, [code, dependencies]);

  const executePython = async () => {
    console.log('Executing code:', code);
    outputRef.current = [];
    
    try {
      if (!window.Sk) {
        throw new Error('Skulpt not loaded');
      }

      const promise = new Promise((resolve, reject) => {
        try {
          const result = window.Sk.importMainWithBody("<stdin>", false, code, true);
          if (result && typeof result.then === 'function') {

            result.then(resolve).catch(reject);
          } else {
      
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      });

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Code execution timeout')), 5000);
      });

      await Promise.race([promise, timeoutPromise]);
      
      const output = outputRef.current.join('');
      console.log('Execution completed. Output:', output);
      onOutput(output);
      
    } catch (err) {
      console.error('Execution error:', err);
      onError(err.toString());
    }
  };

  return null;
};

export default PythonSkulptRunner;