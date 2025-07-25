import { useState, useEffect } from 'react';
import Header from '../components/Header';
import LevelSelector from '../components/LevelSelector';
import InstructionsPanel from '../components/InstructionsPanel';
import CodeEditor from '../components/CodeEditor';
import Navigation from '../components/Navigation';
import PythonSkulptRunner from '../components/PythonSkulptRunner';
import { levels } from '../data/pylingoLevels';

const PyLingoPage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userCode, setUserCode] = useState(levels[0].starterCode);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [codeOutput, setCodeOutput] = useState('');
  const [codeError, setCodeError] = useState('');

  useEffect(() => {
    const level = levels.find(l => l.id === currentLevel);
    setUserCode(level.starterCode);
    setShowHint(false);
    setFeedback(null);
    setCodeOutput('');
    setCodeError('');
  }, [currentLevel]);

  const handleSubmit = async () => {
    const level = levels.find(l => l.id === currentLevel);
    setFeedback({
      type: 'loading',
      message: '🤔 Running your code...'
    });
  };

  useEffect(() => {
    if (codeOutput || codeError) {
      const level = levels.find(l => l.id === currentLevel);
      evaluateResult(codeOutput, codeError, level);
    }
  }, [codeOutput, codeError]);

  const evaluateResult = (output, error, level) => {
    if (error) {
      setStreak(0);
      setFeedback({
        type: 'error',
        message: '❌ There was an error in your code:',
        output: error,
        explanation: 'Fix the error and try again.'
      });
      return;
    }

    const isCorrect = output.trim() === level.expectedOutput.trim();
    
    if (isCorrect) {
      setCompletedLevels(prev => new Set([...prev, currentLevel]));
      setStreak(prev => prev + 1);
      setFeedback({
        type: 'success',
        message: '🎉 Excellent! You completed this level!',
        output: output,
        explanation: 'Your code produced the expected output!'
      });
    } else {
      setStreak(0);
      setFeedback({
        type: 'error',
        message: 'Not quite right. Here\'s what we expected:',
        output: output,
        expected: level.expectedOutput,
        explanation: level.hint
      });
    }
  };

  const handleReset = () => {
    const level = levels.find(l => l.id === currentLevel);
    setUserCode(level.starterCode);
    setFeedback(null);
    setShowHint(false);
    setCodeOutput('');
    setCodeError('');
  };

  const handleLevelChange = (levelId) => {
    const maxUnlockedLevel = Math.max(1, Math.max(...Array.from(completedLevels)) + 1);
    if (levelId <= maxUnlockedLevel) {
      setCurrentLevel(levelId);
      setShowLevelSelector(false);
    }
  };

  const currentLevelData = levels.find(l => l.id === currentLevel);
  const progressPercentage = (completedLevels.size / levels.length) * 100;

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://static.vecteezy.com/system/resources/thumbnails/018/848/128/small/purple-smoke-frame-dark-background-free-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header
        completedLevels={completedLevels}
        levels={levels}
        streak={streak}
        currentLevel={currentLevel}
        setShowLevelSelector={setShowLevelSelector}
        progressPercentage={progressPercentage}
      />

      {showLevelSelector && (
        <LevelSelector
          levels={levels}
          completedLevels={completedLevels}
          currentLevel={currentLevel}
          handleLevelChange={handleLevelChange}
          setShowLevelSelector={setShowLevelSelector}
        />
      )}

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InstructionsPanel
            currentLevelData={currentLevelData}
            completedLevels={completedLevels}
            showHint={showHint}
            setShowHint={setShowHint}
            feedback={feedback}
          />

          <div className="relative">
            <CodeEditor
              userCode={userCode}
              setUserCode={setUserCode}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
            />
            <PythonSkulptRunner
              code={feedback?.type === 'loading' ? userCode : ''}
              onOutput={setCodeOutput}
              onError={setCodeError}
              dependencies={[feedback]}
            />
          </div>
        </div>

        <Navigation
          currentLevel={currentLevel}
          levels={levels}
          completedLevels={completedLevels}
          handleLevelChange={handleLevelChange}
        />
      </main>
    </div>
  );
};

export default PyLingoPage;