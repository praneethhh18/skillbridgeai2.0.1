import React, { useState } from 'react';
import { Brain, ChevronRight, Play, Sparkles, ArrowRight, Award, Settings, Wand2, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, useThemeStore } from '../lib/store';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, updatePreferences } = useAuthStore();
  const [showSettings, setShowSettings] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessage, setAiMessage] = useState('');

  const handleStartAssessment = () => {
    if (isAuthenticated) {
      navigate('/assessment');
    } else {
      navigate('/login');
    }
  };

  const handleWatchDemo = () => {
    navigate('/demo');
  };

  const handleAIStudyBuddy = () => {
    setShowAIChat(true);
    setAiMessage("Hi! I'm your AI study buddy. How can I help you today?");
  };

  const handleSmartRecommendations = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Generate personalized recommendations based on user's profile
    const recommendations = generateRecommendations(user);
    setShowAIChat(true);
    setAiMessage(recommendations);
  };

  const generateRecommendations = (user: any) => {
    if (!user?.currentSkills) {
      return "Complete your skill assessment to get personalized recommendations!";
    }

    const weakSkills = Object.entries(user.currentSkills)
      .filter(([_, level]) => (level as number) < 3)
      .map(([skill]) => skill);

    if (weakSkills.length > 0) {
      return `Based on your profile, I recommend focusing on: ${weakSkills.join(', ')}. Would you like a personalized learning path for these skills?`;
    }

    return "Great job! Your skills are looking strong. Let's explore some advanced topics in your areas of interest.";
  };

  const handlePreferenceChange = (key: string, value: any) => {
    updatePreferences({ [key]: value });
  };

  const stats = [
    { label: 'Active Learners', value: '10,000+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Career Transitions', value: '2,500+' },
    { label: 'Expert Mentors', value: '100+' }
  ];

  const aiFeatures = [
    {
      title: "AI Study Buddy",
      description: "Get instant help with your learning journey",
      icon: Brain,
      action: handleAIStudyBuddy
    },
    {
      title: "Smart Recommendations",
      description: "Personalized content based on your progress",
      icon: Wand2,
      action: handleSmartRecommendations
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold dark:text-white">Settings</h3>
              <button onClick={() => setShowSettings(false)} className="text-gray-500">×</button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-2 dark:text-gray-200">Learning Preferences</h4>
                <select 
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                  onChange={(e) => handlePreferenceChange('learningStyle', e.target.value)}
                  value={user?.preferences?.learningStyle || 'visual'}
                >
                  <option value="visual">Visual Learning</option>
                  <option value="audio">Audio Learning</option>
                  <option value="interactive">Interactive Learning</option>
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 dark:text-gray-200">Study Reminders</h4>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={user?.preferences?.notifications || false}
                    onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                  />
                  <span className="dark:text-gray-200">Enable notifications</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 dark:text-gray-200">AI Assistant Level</h4>
                <select 
                  className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
                  onChange={(e) => handlePreferenceChange('aiAssistantLevel', e.target.value)}
                  value={user?.preferences?.aiAssistantLevel || 'basic'}
                >
                  <option value="basic">Basic Support</option>
                  <option value="advanced">Advanced Analysis</option>
                  <option value="expert">Expert Guidance</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Panel */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50"
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <span className="font-medium dark:text-white">AI Assistant</span>
              </div>
              <button 
                onClick={() => setShowAIChat(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                <p className="text-gray-800 dark:text-gray-200">{aiMessage}</p>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-600 dark:text-white"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // Handle user input
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowSettings(true)}
        className="fixed top-20 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg z-40"
      >
        <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </motion.button>

      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">AI-Powered Learning</span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Career Journey
                </span>
              </h1>
              
              {/* AI Features */}
              <div className="mt-6 space-y-4">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={feature.action}
                  >
                    <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStartAssessment}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWatchDemo}
                    className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-transparent hover:bg-indigo-50 dark:hover:bg-gray-800"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    className="w-full rounded-lg transform transition-transform hover:scale-105 duration-300"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Students learning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-lg"></div>
                </div>

                {/* Floating achievement cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium dark:text-white">Top Rated Platform</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-medium dark:text-white">AI-Powered Learning</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;