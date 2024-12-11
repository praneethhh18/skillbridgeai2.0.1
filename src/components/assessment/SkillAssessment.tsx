import React, { useState } from 'react';
import { useAssessmentStore } from '../../lib/store';

const skillCategories = [
  {
    name: 'Technical Skills',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL'],
  },
  {
    name: 'Soft Skills',
    skills: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork'],
  },
  {
    name: 'Industry Knowledge',
    skills: ['Agile Methodology', 'Project Management', 'Data Analysis'],
  },
];

const SkillAssessment = () => {
  const { startAssessment, submitAssessment } = useAssessmentStore();
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleRatingChange = (skill: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [skill]: rating }));
  };

  const handleSubmit = () => {
    submitAssessment(ratings);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Skill Assessment</h2>
        <p className="mt-4 text-lg text-gray-500">
          Rate your proficiency in each skill from 1 to 5
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-1/3 text-gray-700">{skill}</span>
                  <div className="w-2/3 flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleRatingChange(skill, rating)}
                        className={`w-8 h-8 rounded-full ${
                          ratings[skill] === rating
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Submit Assessment
        </button>
      </div>
    </div>
  );
};

export default SkillAssessment;