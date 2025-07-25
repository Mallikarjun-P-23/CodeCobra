import { CheckCircle, Lock } from 'lucide-react';

const LevelSelector = ({ 
  levels, 
  completedLevels, 
  currentLevel, 
  handleLevelChange, 
  setShowLevelSelector 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Select Level</h2>
            <button
              onClick={() => setShowLevelSelector(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {levels.map((level) => {
              const isCompleted = completedLevels.has(level.id);
              const isLocked = level.id > Math.max(1, Math.max(...Array.from(completedLevels)) + 1);
              const isCurrentLevel = level.id === currentLevel;
              
              return (
                <button
                  key={level.id}
                  onClick={() => !isLocked && handleLevelChange(level.id)}
                  disabled={isLocked}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    isCurrentLevel
                      ? 'border-blue-500 bg-blue-50'
                      : isCompleted
                      ? 'border-green-500 bg-green-50 hover:bg-green-100'
                      : isLocked
                      ? 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50'
                      : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-gray-600">Level {level.id}</span>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5 text-gray-400" />
                    ) : null}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{level.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{level.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;