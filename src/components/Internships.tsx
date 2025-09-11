import React from 'react';
import { Briefcase, Plus } from 'lucide-react';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Internships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experiences and internships that have shaped my career journey.
          </p>
        </div>

        {/* Placeholder for future internships */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Internship Experiences Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              This section will showcase my professional internship experiences, 
              including roles, responsibilities, achievements, and skills gained 
              in various organizations.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Updates Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Skills that would be relevant for internships */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills for Professional Opportunities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'International Business',
              'AI & Technology',
              'Business Analysis',
              'Project Management',
              'Strategic Planning',
              'Market Research',
              'Leadership',
              'Communication',
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 text-center border border-blue-100 dark:border-blue-900/30"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;