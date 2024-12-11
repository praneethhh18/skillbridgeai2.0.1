import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, Gift, Trophy, Star, 
  Calendar, Target, Zap, ShoppingBag,
  Crown, Medal, Award, Sparkles
} from 'lucide-react';

const StreaksAndRewards = () => {
  const currentStreak = 15;
  const totalPoints = 2750;
  const nextReward = 3000;
  
  const achievements = [
    { id: 1, name: '7-Day Streak', completed: true, points: 100 },
    { id: 2, name: '30-Day Streak', completed: false, points: 500 },
    { id: 3, name: 'Complete 5 Courses', completed: true, points: 1000 },
    { id: 4, name: 'Perfect Assessment', completed: true, points: 250 }
  ];

  const rewards = [
    {
      id: 1,
      name: 'Premium Course Access',
      points: 5000,
      icon: Crown,
      available: false
    },
    {
      id: 2,
      name: '1-on-1 Mentoring Session',
      points: 3000,
      icon: Star,
      available: false
    },
    {
      id: 3,
      name: 'Digital Certificate',
      points: 2000,
      icon: Award,
      available: true
    },
    {
      id: 4,
      name: 'Custom Profile Badge',
      points: 1000,
      icon: Medal,
      available: true
    }
  ];

  const dailyTasks = [
    { id: 1, name: 'Complete Daily Quiz', points: 50, completed: true },
    { id: 2, name: 'Watch Tutorial Video', points: 30, completed: true },
    { id: 3, name: 'Practice Coding', points: 100, completed: false },
    { id: 4, name: 'Review Notes', points: 40, completed: false }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Streaks & Rewards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Keep learning daily to earn points and unlock rewards
          </p>
        </div>

        {/* Current Streak and Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Current Streak
                </h2>
                <div className="flex items-center">
                  <Flame className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-4xl font-bold text-orange-500">{currentStreak}</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">days</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < 5 ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Total Points
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-500 mr-2" />
                <span className="text-4xl font-bold text-yellow-500">{totalPoints}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                  Next reward at {nextReward}
                </span>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-yellow-500 rounded-full h-2"
                style={{ width: `${(totalPoints / nextReward) * 100}%` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Daily Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Daily Tasks
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {dailyTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => {}}
                        className="h-4 w-4 text-indigo-600 rounded"
                      />
                      <span className="ml-3 text-gray-900 dark:text-white">
                        {task.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {task.points} pts
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg border-2 ${
                    achievement.completed
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {achievement.completed ? (
                        <Trophy className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <Medal className="h-5 w-5 text-gray-400 mr-2" />
                      )}
                      <span className={`font-medium ${
                        achievement.completed
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {achievement.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {achievement.points}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rewards Shop */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Rewards Shop
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <motion.div
                    key={reward.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <reward.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {reward.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {reward.points}
                        </span>
                      </div>
                    </div>
                    <button
                      className={`w-full py-2 px-4 rounded-lg text-sm font-medium ${
                        reward.available
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700'
                      }`}
                      disabled={!reward.available}
                    >
                      {reward.available ? 'Redeem' : 'Not Enough Points'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreaksAndRewards;