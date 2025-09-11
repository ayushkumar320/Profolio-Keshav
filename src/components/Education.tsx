import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Business Administration (BBA)',
      specialization: 'International Business/Trade/Commerce with Artificial Intelligence',
      institution: 'Amity University Noida',
      period: '2022 - 2025',
      location: 'Noida, India',
      status: 'Currently Pursuing (3rd Year)',
      description: 'Specializing in international trade, global commerce, and artificial intelligence applications in business.'
    },
    {
      degree: '12th Grade',
      specialization: 'Commerce',
      institution: 'Delhi Public School',
      period: '2020 - 2022',
      location: 'Ranchi, India',
      status: 'Completed',
      description: 'Completed higher secondary education with a focus on commerce and business studies.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational journey reflects a strong foundation in commerce and business, 
            with a specialized focus on international business and artificial intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {item.status}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.degree}
                      </h3>
                      {item.specialization && (
                        <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {item.specialization}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Academic Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="text-3xl mb-4">🌐</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                International Business
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Global trade, commerce, and cross-cultural business strategies
              </p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="text-3xl mb-4">🤖</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Artificial Intelligence
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                AI applications in business and emerging technologies
              </p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="text-3xl mb-4">💼</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Business Administration
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Management principles, strategy, and organizational behavior
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;