import React from "react";
import {Target, Award, Users, TrendingUp} from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "National Shooter",
      description: "10M Pistol Shooter with national-level expertise",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Leading member of Artificial Intelligence Club",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "IIC Member",
      description: "Active participant in Innovation and Incubation Cell",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "International Business",
      description: "Specialized in global trade and commerce",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A dedicated BBA student specializing in International Business with
            Artificial Intelligence, combining academic excellence with diverse
            interests and leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Currently pursuing my BBA in International Business with a
                  specialization in Artificial Intelligence from Amity
                  University Noida. My academic journey reflects a strong
                  foundation in commerce and business studies, having completed
                  my 12th grade in Commerce from Delhi Public School Ranchi.
                </p>
                <p>
                  Beyond academics, I'm passionate about technology and
                  innovation, serving as a leading member of the Artificial
                  Intelligence Club and actively participating in the Innovation
                  and Incubation Cell (IIC).
                </p>
                <p>
                  My unique combination of business acumen, technological
                  insight, and sporting excellence as a National 10M Pistol
                  Shooter demonstrates my commitment to excellence in diverse
                  fields.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-inner relative">
                {/* Hero Image */}
                <img
                  src="/hero.png"
                  alt="Keshav Parag portrait"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 select-none pointer-events-none"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-6 py-4 rounded-xl">
                    <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-3 leading-[1.25] pb-2">
                      Keshav Parag
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
                      Future Business Leader
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-2">
                      Bridging Business & Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
