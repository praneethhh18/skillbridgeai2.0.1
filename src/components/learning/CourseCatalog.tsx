import React from 'react';
import { Book, Clock, Award } from 'lucide-react';
import { useLearningStore } from '../../lib/store';

const courses = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    level: 'beginner',
    skills: ['HTML', 'CSS', 'JavaScript'],
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: '2',
    title: 'Data Science Essentials',
    description: 'Master the fundamentals of data analysis and visualization',
    level: 'intermediate',
    skills: ['Python', 'Statistics', 'Data Visualization'],
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

const CourseCatalog = () => {
  const { enrollInCourse } = useLearningStore();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Course Catalog</h2>
        <p className="mt-4 text-lg text-gray-500">
          Explore our curated collection of courses designed to help you succeed
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-500 capitalize">
                  {course.level}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="mt-2 text-gray-500">{course.description}</p>
              <div className="mt-4 flex items-center">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">{course.duration}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Skills you'll learn:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => enrollInCourse(course)}
                className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Book className="h-5 w-5 mr-2" />
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;