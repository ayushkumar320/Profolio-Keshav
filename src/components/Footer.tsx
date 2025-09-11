import React from 'react';
import { Mail, Linkedin, Target, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Keshav Parag
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              BBA International Business With Artificial Intelligence student, passionate about 
              technology, innovation, and excellence in diverse fields including national-level shooting.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:keshavdubey2005@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/keshav-parag-862142205/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#education', label: 'Education' },
                { href: '#internships', label: 'Internships' },
                { href: '#research', label: 'Research' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Highlights</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span className="text-sm">BBA International Business</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Target className="w-4 h-4 text-teal-400" />
                <span className="text-sm">National 10M Pistol Shooter</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <span className="text-sm">AI Club Leading Member</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span className="text-sm">IIC Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Keshav Parag. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with passion for excellence and innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;