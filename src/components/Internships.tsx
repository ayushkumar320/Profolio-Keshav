import React from "react";
import {Calendar, Award, Briefcase, Trophy, User, FileDown} from "lucide-react";

const internshipData = {
  company: "NJ Wealth",
  certificate: "/internship-ceti.pdf",
  companyDescription:
    "NJ Wealth stands out in the financial sector, specializing in areas like investment banking, wealth management, and financial technology solutions. My placement within the Risk Management Department, Equity Research Team, and Tele calling provided a unique opportunity to observe and actively contribute to diverse operational facets of the firm.\n\nThe core objective of this internship was to gain direct insight into the intricate financial services industry, comprehend the day-to-day workings of a financial institution, and apply my analytical and problem-solving abilities to live business scenarios. This report will detail my project involvement, highlight crucial learning outcomes, and discuss how this immersive experience profoundly shaped my perception of the financial world and my future career aspirations.",
  companyAchievements: [
    "Won four Big League Awards from Cafemutual in 2024: SIP Champion, Equity Champion, New Investor Addition Champion, and Champion of the Year",
    "Received 3 National Distributor Awards at the AMFI Mutual Fund Summit 2025",
    "40,000+ active distributors operating from 200+ locations across India",
    "Serves over 40 Lakh+ investors with Assets Under Management (AUM) exceeding ₹2,00,000+ Crores",
    "Strong emphasis on distributor training, technology integration, and financial literacy through initiatives like NJ FLAP",
    "Added ~7.30 lakh new investors in FY 2022-23 with growing SIP book",
  ],
  role: "Finance & Marketing Intern",
  period: "May 13 - June 30, 2025 (39 days)",
  abstract:
    "This internship focused on gaining hands-on experience in Finance, Marketing, and Sales. During the 39-day program, I developed a customer segmentation model, supported social media campaign planning, and optimized database queries. Working in a fast-paced environment, I successfully helped secure 3 new partners and attracted over 20 interested candidates, while strengthening my project management and communication skills. This experience effectively bridged the gap between academic principles and practical industry application.",
  myAchievements: [
    "Developed customer segmentation model for targeted marketing campaigns",
    "Planned and executed social media marketing initiatives",
    "Optimized database queries and data analysis processes",
    "Secured 3 new business partners through effective outreach",
    "Attracted 20+ interested candidates through marketing efforts",
    "Gained practical experience in finance, marketing, and sales operations",
  ],
};

const Internships: React.FC = () => {
  // No need for animation refs anymore

  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Internships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experiences and internships that have shaped my career
            journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Overview Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/nj-logo.jpg"
                  alt="NJ Wealth Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {internshipData.company}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{internshipData.period}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
              {internshipData.companyDescription}
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Company Achievements
              </h4>
              <ul className="grid gap-3">
                {internshipData.companyAchievements.map(
                  (achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* My Experience Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Role & Contributions
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {internshipData.role}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Project Abstract
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {internshipData.abstract}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Key Achievements
                </h4>
                <ul className="grid gap-3">
                  {internshipData.myAchievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certificate Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-gray-900 dark:text-white">
                <h3 className="text-xl font-bold mb-2">
                  Internship Certificate
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Download my internship completion certificate
                </p>
              </div>
              <a
                href={internshipData.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-md active:scale-[0.98]"
              >
                <FileDown className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
