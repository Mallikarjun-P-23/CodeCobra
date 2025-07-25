import { Lightbulb, CheckCircle } from 'lucide-react';
import Feedback from './Feedback';

const InstructionsPanel = ({ 
  currentLevelData, 
  completedLevels, 
  showHint, 
  setShowHint, 
  feedback 
}) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-purple-800">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Level {currentLevelData.id}: {currentLevelData.title}
          </h2>
          {completedLevels.has(currentLevelData.id) && (
            <CheckCircle className="w-6 h-6 text-green-400" />
          )}
        </div>
        
        <p className="text-purple-200 mb-4">{currentLevelData.description}</p>
        
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <h3 className="font-semibold text-purple-300 mb-2">Task:</h3>
          <p className="text-purple-100">{currentLevelData.task}</p>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <Lightbulb className="w-5 h-5" />
          <span className="font-medium">
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </span>
        </button>
        
        {showHint && (
          <div className="mt-3 bg-gradient-to-r from-yellow-900 to-yellow-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-yellow-100">{currentLevelData.hint}</p>
          </div>
        )}
      </div>

      {feedback && <Feedback feedback={feedback} />}
    </div>
  );
};

export default InstructionsPanel;