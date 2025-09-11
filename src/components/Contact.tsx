import React from "react";
import {Mail, Linkedin, MapPin, Send} from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "keshavdubey2005@gmail.com",
      href: "mailto:keshavdubey2005@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/keshav-parag-862142205/",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Noida, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect and explore opportunities for collaboration,
            internships, or discussions about business, technology, and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:keshavdubey2005@gmail.com"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      Send Email
                    </span>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/keshav-parag-862142205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      LinkedIn Profile
                    </span>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ready to collaborate?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Click the button below to compose an email directly in your
                  Gmail
                </p>
              </div>

              <a
                href="mailto:keshavdubey2005@gmail.com?subject=Let's Connect - Portfolio Inquiry&body=Hello Keshav,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Mail Me!</span>
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Or connect with me on LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/keshav-parag-862142205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
