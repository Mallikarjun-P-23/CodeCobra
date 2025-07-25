import { Play, RotateCcw } from 'lucide-react';

const CodeEditor = ({ userCode, setUserCode, handleSubmit, handleReset }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-purple-800">
      <div className="bg-gradient-to-r from-gray-800 to-purple-900 text-white p-4 flex items-center justify-between border-b border-purple-700">
        <h3 className="font-semibold text-purple-200">Python Code Editor</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors text-sm border border-purple-600"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-3 py-1 rounded transition-all duration-300 text-sm shadow-lg"
          >
            <Play className="w-4 h-4" />
            <span>Run Code</span>
          </button>
        </div>
      </div>
      
      <div className="p-0">
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full h-96 p-4 font-mono text-sm bg-black text-purple-300 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="# Write your Python code here..."
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default CodeEditor;