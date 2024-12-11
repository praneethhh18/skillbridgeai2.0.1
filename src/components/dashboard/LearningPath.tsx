import React from 'react';
import { useLearningStore } from '../../lib/store';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const LearningPath = () => {
  const { enrolledCourses, progress } = useLearningStore();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Your Learning Path</h2>
        <p className="mt-4 text-lg text-gray-500">
          Track your progress and continue your learning journey
        </p>
      </div>

      <div className="mt-12">
        {enrolledCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No courses yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Start by enrolling in a course from our catalog
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-6 w-6 text-indigo-600" />
                      <h3 className="ml-2 text-lg font-medium text-gray-900">
                        {course.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 capitalize">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                            Progress
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-indigo-600">
                            {progress[course.id]}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div
                          style={{ width: `${progress[course.id]}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">
                      {progress[course.id] === 100
                        ? 'Course completed'
                        : 'In progress'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPath;