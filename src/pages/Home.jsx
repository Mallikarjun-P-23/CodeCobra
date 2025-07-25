import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to CodeCobra</h1>
        <p className="text-lg text-gray-700 mb-8">
          Learn Python programming through interactive challenges. Complete levels, 
          write code, and get instant feedback to improve your skills.
        </p>
        
        <Link
          to="/pylingo"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
        >
          Start Learning
        </Link>
        
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">What you'll learn:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Python syntax and fundamentals</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Variables and data types</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Conditionals and loops</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Functions and data structures</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;