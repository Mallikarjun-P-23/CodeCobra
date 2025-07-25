const Navigation = ({ 
  currentLevel, 
  levels, 
  completedLevels, 
  handleLevelChange 
}) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        onClick={() => currentLevel > 1 && handleLevelChange(currentLevel - 1)}
        disabled={currentLevel === 1}
        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-purple-600"
      >
        Previous Level
      </button>
      
      <div className="text-center">
        <p className="text-purple-200">
          Level {currentLevel} of {levels.length}
        </p>
      </div>
      
      <button
        onClick={() => {
          if (completedLevels.has(currentLevel) && currentLevel < levels.length) {
            handleLevelChange(currentLevel + 1);
          }
        }}
        disabled={!completedLevels.has(currentLevel) || currentLevel === levels.length}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-purple-500"
      >
        Next Level
      </button>
    </div>
  );
};

export default Navigation;