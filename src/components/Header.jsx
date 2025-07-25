import { Trophy, Flame, Code } from 'lucide-react';

const Header = ({ completedLevels, levels, streak, currentLevel, setShowLevelSelector, progressPercentage }) => {
  return (
    <header className="bg-gray-900 shadow-2xl border-b-2 border-purple-500">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                  CodeCobra
                </h1>
                <p className="text-xs text-purple-300">Learn Python Interactively</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-purple-300">
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="font-medium">{completedLevels.size}/{levels.length} Levels</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-900 to-purple-800 px-3 py-1 rounded-full border border-purple-600">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="font-bold text-orange-300">{streak}</span>
              <span className="text-purple-300 text-sm">streak</span>
            </div>
            
            <button
              onClick={() => setShowLevelSelector(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg border border-purple-500"
            >
              Level {currentLevel}
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm text-purple-300 mb-1">
            <span>Overall Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 border border-purple-800">
            <div 
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;