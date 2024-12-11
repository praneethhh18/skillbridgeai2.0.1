import React from 'react';
import { Brain, Target, BookOpen, TrendingUp, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'AI Skill Assessment',
    description: 'Get a comprehensive evaluation of your current skills and identify gaps in your knowledge.',
    icon: Brain,
    path: '/assessment'
  },
  {
    name: 'Personalized Learning Paths',
    description: 'Receive customized course recommendations based on your goals and market demands.',
    icon: Target,
    path: '/learning-path'
  },
  {
    name: 'Interactive Learning',
    description: 'Engage with dynamic content and real-world projects to build practical skills.',
    icon: BookOpen,
    path: '/interactive'
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your skill development with detailed analytics and milestone achievements.',
    icon: TrendingUp,
    path: '/progress'
  },
  {
    name: 'Peer Learning',
    description: 'Connect with fellow learners and industry mentors for collaborative growth.',
    icon: Users,
    path: '/peer-learning'
  },
  {
    name: 'Skill Certification',
    description: 'Earn recognized certificates to showcase your expertise to employers.',
    icon: Award,
    path: '/certification'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  const navigate = useNavigate();

  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Empowering Your Learning Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI-powered platform provides everything you need to succeed in your career
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-4 left-6">
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-xl shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </span>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;