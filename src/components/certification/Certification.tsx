import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download, CheckCircle, Clock, Star } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    title: 'Full Stack Web Development',
    issueDate: '2024-02-15',
    status: 'completed',
    score: 92,
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 'cert-2',
    title: 'Data Science Fundamentals',
    issueDate: '2024-03-01',
    status: 'completed',
    score: 88,
    skills: ['Python', 'Statistics', 'Machine Learning'],
  },
  {
    id: 'cert-3',
    title: 'UI/UX Design',
    status: 'in_progress',
    progress: 75,
    skills: ['Design Systems', 'User Research', 'Prototyping'],
  },
];

const Certification = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Your Certifications</h1>
          <p className="mt-4 text-xl text-gray-600">
            Track and manage your earned certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 text-indigo-600" />
                  {cert.status === 'completed' ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <Clock className="h-4 w-4 mr-1" />
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>

                {cert.status === 'completed' ? (
                  <>
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-2 text-gray-600">Score: {cert.score}%</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Issued on {new Date(cert.issueDate).toLocaleDateString()}
                    </p>
                  </>
                ) : (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{cert.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.status === 'completed' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white rounded-xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Advanced React Development', 'Cloud Architecture', 'Mobile App Development'].map(
              (cert, index) => (
                <motion.div
                  key={cert}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Complete the required courses to earn this certification
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    View Requirements
                  </motion.button>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;