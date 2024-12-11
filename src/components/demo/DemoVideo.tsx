import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">How SkillBridge AI Works</h1>
          <p className="mt-4 text-lg text-gray-600">Watch our demo to see how we help students achieve their career goals</p>
        </div>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[600px] rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Platform Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">1. Skill Assessment</h3>
            <p className="mt-2 text-gray-600">Take our AI-powered assessment to identify your current skill level and areas for improvement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">2. Personalized Path</h3>
            <p className="mt-2 text-gray-600">Get a customized learning path based on your goals and industry demands.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">3. Track Progress</h3>
            <p className="mt-2 text-gray-600">Monitor your progress and receive AI-driven recommendations to stay on track.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;