import React from 'react';
import { FileText, Plus, BookOpen } from 'lucide-react';

const ResearchPapers: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Published Research Papers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic research contributions and publications in the fields of 
            business, artificial intelligence, and international trade.
          </p>
        </div>

        {/* Placeholder for future research papers */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Research Publications Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              This section will feature my published research papers, academic publications, 
              and contributions to scholarly journals in business, AI, and international trade.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600 dark:text-teal-400">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Publications Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI in Business
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Applications of artificial intelligence in international business 
                and global trade optimization
              </p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                International Trade
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Cross-border commerce, trade policies, and emerging market 
                dynamics in the digital age
              </p>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Innovation & Entrepreneurship
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Startup ecosystems, innovation management, and technology 
                entrepreneurship in global markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;