import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkillBridge AI</span>
            </div>
            <p className="mt-4 text-gray-500">
              Empowering youth with AI-driven skill development for a better future.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">How it Works</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Help Center</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">API Status</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-indigo-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} SkillBridge AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;