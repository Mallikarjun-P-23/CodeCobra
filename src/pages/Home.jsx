import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Snake3D from '../components/Snake3D';
import Cube3D from '../components/Cube3D';
import { Code2, Zap, Trophy, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Code2,
      title: 'Interactive Coding',
      description: 'Write Python code directly in your browser and get instant feedback'
    },
    {
      icon: Zap,
      title: 'Real-time Execution',
      description: 'Execute your code immediately and see the results in real-time'
    },
    {
      icon: Trophy,
      title: 'Progress Tracking',
      description: 'Complete challenges and track your learning progress'
    },
    {
      icon: Users,
      title: 'Learn Together',
      description: 'Join a community of Python learners worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Welcome to CodeCobra
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Learn Python programming through interactive challenges. Complete levels, write code, and get instant feedback to improve your skills.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/pylingo">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  🚀 Start Coding
                </motion.button>
              </Link>
              <Link to="/resources">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  📚 Resources
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Levels', value: '20+' },
                { label: 'Challenges', value: '100+' },
                { label: 'Learners', value: '1K+' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Object */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Snake3D />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Choose CodeCobra?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-100 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-blue-600"
          >
            What You'll Learn
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Cube3D />
            </motion.div>

            <ul className="space-y-4">
              {[
                'Python syntax and fundamentals',
                'Variables and data types',
                'Conditionals and loops',
                'Functions and data structures',
                'File handling and modules',
                'Object-oriented programming'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-2xl text-green-500 font-bold">✓</span>
                  <span className="text-lg text-gray-800 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Master Python?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who are already improving their coding skills with CodeCobra
        </p>
        <Link to="/pylingo">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:shadow-xl transition-all"
          >
            Start Your Journey Now 🐍
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;