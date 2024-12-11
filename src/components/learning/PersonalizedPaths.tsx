import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Database, Palette, Brain } from 'lucide-react';

const paths = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: Code,
    description: 'Master modern web development with React, Node.js, and more',
    duration: '6 months',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database'],
    roadmap: [
      { title: 'Frontend Fundamentals', duration: '2 months' },
      { title: 'React & Modern JavaScript', duration: '2 months' },
      { title: 'Backend Development', duration: '2 months' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: Database,
    description: 'Learn data analysis, machine learning, and AI fundamentals',
    duration: '8 months',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
    roadmap: [
      { title: 'Python & Statistics', duration: '3 months' },
      { title: 'Data Analysis & Visualization', duration: '2 months' },
      { title: 'Machine Learning Basics', duration: '3 months' },
    ],
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Create beautiful and user-friendly digital experiences',
    duration: '6 months',
    skills: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    roadmap: [
      { title: 'Design Fundamentals', duration: '2 months' },
      { title: 'User Experience Design', duration: '2 months' },
      { title: 'Advanced UI & Systems', duration: '2 months' },
    ],
  },
];

const PersonalizedPaths = () => {
  const [selectedPath, setSelectedPath] = useState(paths[0]);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Learning Path</h1>
          <p className="mt-4 text-xl text-gray-600">
            Select a personalized journey tailored to your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {paths.map((path) => (
            <motion.div
              key={path.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer rounded-xl p-6 ${
                selectedPath.id === path.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-900'
              } shadow-xl transition-colors duration-200`}
              onClick={() => setSelectedPath(path)}
            >
              <div className="flex items-center mb-4">
                <path.icon className={`h-8 w-8 ${
                  selectedPath.id === path.id ? 'text-white' : 'text-indigo-600'
                }`} />
                <h3 className="ml-3 text-xl font-semibold">{path.title}</h3>
              </div>
              <p className={`${
                selectedPath.id === path.id ? 'text-indigo-100' : 'text-gray-600'
              }`}>
                {path.description}
              </p>
              <div className="mt-4 flex items-center">
                <span className={`${
                  selectedPath.id === path.id ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  {path.duration}
                </span>
                <ChevronRight className={`ml-2 h-5 w-5 ${
                  selectedPath.id === path.id ? 'text-white' : 'text-indigo-600'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Learning Roadmap: {selectedPath.title}
          </h2>

          <div className="relative">
            {selectedPath.roadmap.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center mb-8 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{stage.title}</h3>
                  <p className="text-gray-600">{stage.duration}</p>
                </div>
                {index < selectedPath.roadmap.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-indigo-200" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills You'll Learn</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPath.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalizedPaths;