import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Target, Rocket, Users, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    id: 'dynamic-content',
    title: 'Dynamic Content',
    icon: Code,
    description: 'Interactive coding exercises and real-time feedback',
    features: ['Live coding environments', 'Instant code validation', 'Progressive challenges']
  },
  {
    id: 'real-world',
    title: 'Real World Projects',
    icon: Rocket,
    description: 'Build production-ready projects with industry standards',
    features: ['Industry-based scenarios', 'Portfolio-worthy projects', 'Code reviews']
  },
  {
    id: 'practical-skills',
    title: 'Practical Skills',
    icon: Target,
    description: 'Develop hands-on expertise in modern technologies',
    features: ['Technical workshops', 'Best practices', 'Industry tools']
  },
  {
    id: 'collaborative',
    title: 'Collaborative Learning',
    icon: Users,
    description: 'Learn and grow with peers and mentors',
    features: ['Group projects', 'Peer reviews', 'Mentor sessions']
  }
];

const InteractiveLearning = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Interactive Learning Experience
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Immerse yourself in hands-on learning with real-world applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <section.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Brain className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/interactive/${section.id}`)}
                  className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Start Learning
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearning;