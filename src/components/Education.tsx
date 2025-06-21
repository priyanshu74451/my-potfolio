import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Deen Dayal Upadhaya Gorakhpur University',
      location: 'Gorakhour,Utter Pradesh',
      duration: '2022 - 2025',
      grade: '75%',
      description: 'Comprehensive study of computer applications, programming languages, database management, and software development methodologies.',
      highlights: [
        'Major Project: Weather forecast farmer assistent',
        'Relevant Coursework: Data Structures, DBMS, Web devlopment',
        'Active member of Computer Science Society',
        'Participated in various coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (12th)',
      institution: 'Saraswati Vidhaya Mandir,Gorakhpur Utter Pradesh',
      location: 'Gorakhpur, Utter Pradesh',
      duration: '2021 - 2022',
      grade: '60%',
      description: 'Commerce stream with Accounts,Bussiness,and Economics. Built strong foundation in analytical thinking and problem-solving.',
      highlights: [
        'Commerce Stream - Accounts,Bussiness and Economics',
      ]
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Academic Excellence',
      description: 'Graduated BCA with First Class with Distinction'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Research Project',
      description: 'Completed major project on modern web development'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Leadership',
      description: 'Led team projects and mentored junior students'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that drives my passion for technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">{edu.degree}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                        <p className="text-blue-600 font-medium">Grade: {edu.grade}</p>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{edu.description}</p>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Highlights:</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Notable Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Focus</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Programming & Development</span>
                  <div className="w-16 bg-blue-200 rounded-full h-2">
                    <div className="w-full h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Database Management</span>
                  <div className="w-16 bg-blue-200 rounded-full h-2">
                    <div className="w-5/6 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Web Technologies</span>
                  <div className="w-16 bg-blue-200 rounded-full h-2">
                    <div className="w-11/12 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Software Engineering</span>
                  <div className="w-16 bg-blue-200 rounded-full h-2">
                    <div className="w-4/5 h-2 bg-blue-600 rounded-full"></div>
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

export default Education;