import React, { useState, useEffect } from 'react';

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating skill icons with image URLs
  const floatingSkills = [
    { 
      name: 'Python', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      delay: 0 
    },
    { 
      name: 'HTML', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      delay: 0.5 
    },
    { 
      name: 'CSS', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      delay: 1 
    },
    { 
      name: 'JavaScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      delay: 1.5 
    },
    { 
      name: 'React', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      delay: 2 
    },
    { 
      name: 'Node.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      delay: 2.5 
    },
    { 
      name: 'MongoDB', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      delay: 3 
    },
    { 
      name: 'MySQL', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      delay: 3.5 
    },
    { 
      name: 'Firebase', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      delay: 4 
    },
    { 
      name: 'TensorFlow', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      delay: 4.5 
    },
    { 
      name: 'GitHub', 
      image: 'https://imgs.search.brave.com/cv9MOw1ZUWuM5XkrwxWQGHA7yOOy8HRxgK8shPjqr8c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ4LzIvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTQ4MDQ1/MC5wbmc',
      delay: 5 
    },
    { 
      name: 'Docker', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      delay: 5.5 
    }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java','Python', 'C', 'C++']
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript',  ]
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB', 'GitHub', 'Firebase','Appwrite',]
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React JS','React Native', 'Tailwind CSS','TensorFlow']
    },
    {
      title: 'Core Concepts',
      skills: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Deep Learning',
        'Object-Oriented Programming',
        'Network Security',
        'Test-Driven Development'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Teamwork',
        'Project Management',
        'Problem Solving',
        'Adaptability',
        'Communication'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Skills Animation Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {floatingSkills.map((skill, idx) => (
            <div
              key={idx}
              className="absolute animate-float-random"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${skill.delay}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl p-4">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium whitespace-nowrap bg-gray-900/90 px-3 py-1 rounded-full border border-gray-700">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Title */}
        <div className="relative z-10 text-center px-6">
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-400 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Technical Expertise & Capabilities
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Skills List Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animationDelay: `${catIdx * 0.1}s`
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <li 
                    key={skillIdx} 
                    className="text-gray-300 flex items-start group"
                  >
                    <span className="text-blue-400 mr-3 mt-1 group-hover:scale-125 transition-transform">•</span>
                    <span className="group-hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">
              Always <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Learning</span>
            </h3>
            <p className="text-gray-400 max-w-2xl">
              I'm constantly exploring new technologies and expanding my skill set. 
              The tech world evolves rapidly, and I'm committed to staying ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
          75% {
            transform: translate(20px, 30px) rotate(3deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        .animate-float-random {
          animation: float-random ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}