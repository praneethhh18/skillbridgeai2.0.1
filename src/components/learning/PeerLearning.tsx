import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageSquare, Video, Calendar, Star, Award,
  UserPlus, Globe, BookOpen, Camera, Mic, MicOff, VideoOff,
  Share, MessageCircle, Settings, Coffee
} from 'lucide-react';

const mentors = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Senior Software Engineer',
    expertise: ['React', 'Node.js', 'System Design'],
    rating: 4.9,
    status: 'online',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '2',
    name: 'Alex Kumar',
    role: 'Data Scientist',
    expertise: ['Python', 'Machine Learning', 'Data Analysis'],
    rating: 4.8,
    status: 'in-meeting',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

const studyGroups = [
  {
    id: '1',
    name: 'Web Development Squad',
    members: 12,
    topic: 'React & Node.js',
    nextMeeting: '2024-03-15T14:00:00',
  },
  {
    id: '2',
    name: 'Data Science Hub',
    members: 8,
    topic: 'Machine Learning',
    nextMeeting: '2024-03-16T15:30:00',
  },
];

const PeerLearning = () => {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [activeTab, setActiveTab] = useState('mentors');

  const handleJoinMeeting = () => {
    setIsInMeeting(true);
  };

  const handleLeaveMeeting = () => {
    setIsInMeeting(false);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {!isInMeeting ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Peer Learning Network</h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Connect, collaborate, and learn together
              </p>
            </motion.div>

            <div className="mb-8 flex justify-center space-x-4">
              {['mentors', 'study-groups', 'upcoming-sessions'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  } dark:bg-gray-800 dark:text-gray-200`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                {activeTab === 'mentors' && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Mentors</h2>
                    <div className="space-y-6">
                      {mentors.map((mentor) => (
                        <motion.div
                          key={mentor.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="relative">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="h-16 w-16 rounded-full"
                            />
                            <span className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${
                              mentor.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{mentor.name}</h3>
                              <div className="flex items-center text-yellow-400">
                                <Star className="h-5 w-5 fill-current" />
                                <span className="ml-1 text-gray-900 dark:text-white">{mentor.rating}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">{mentor.role}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {mentor.expertise.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="mt-4 flex space-x-4">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={handleJoinMeeting}
                                className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-4 py-2 rounded-lg"
                              >
                                <Video className="h-4 w-4 mr-2" />
                                Start Session
                              </motion.button>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                              >
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Message
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'study-groups' && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Study Groups</h2>
                    <div className="space-y-6">
                      {studyGroups.map((group) => (
                        <motion.div
                          key={group.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{group.name}</h3>
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={handleJoinMeeting}
                              className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-4 py-2 rounded-lg"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Join Meeting
                            </motion.button>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">Topic: {group.topic}</p>
                          <div className="mt-4 flex items-center space-x-6 text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              {group.members} members
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              Next: {new Date(group.nextMeeting).toLocaleDateString()}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center">
                        <UserPlus className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-200">Find Study Partner</span>
                      </div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-200">Browse Communities</span>
                      </div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center">
                        <Coffee className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-200">Virtual Coffee Chat</span>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Live Session</h2>
              <div className="flex space-x-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-full ${isMuted ? 'bg-red-500' : 'bg-gray-600'}`}
                >
                  {isMuted ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5 text-white" />}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-2 rounded-full ${isVideoOff ? 'bg-red-500' : 'bg-gray-600'}`}
                >
                  {isVideoOff ? <VideoOff className="h-5 w-5 text-white" /> : <Camera className="h-5 w-5 text-white" />}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gray-600"
                >
                  <Share className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLeaveMeeting}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Leave
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900">
              <div className="col-span-2 aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <Video className="h-16 w-16 text-gray-600" />
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Camera className="h-8 w-8 text-gray-600" />
                </div>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-800 flex space-x-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-indigo-600 rounded-lg"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-700 rounded-lg"
              >
                <Settings className="h-5 w-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PeerLearning;