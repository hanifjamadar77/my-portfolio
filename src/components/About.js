import React, { useState, useEffect } from 'react';
import { User, Heart, Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: "Hanif Jamadar",
    title: "Full Stack Mobile and Web Application Developer | React Native | React.js | Node.js | ML",
    introduction: "I am a passionate and driven tech enthusiast with hands-on experience in MERN stack development, Machine Learning, Java, and Python. I enjoy building full-stack Web and Mobile applications that are efficient, scalable, and user-friendly. With a strong foundation in both frontend and backend technologies, I also bring experience in applying machine learning models to solve practical problems. My approach combines continuous learning, attention to detail, and a strong problem-solving mindset.",
    currentFocus: "Currently, I am seeking opportunities in Web Development, Machine Learning, or Software Engineering roles where I can contribute to innovative projects and grow alongside a talented team. I’m eager to apply my skills in real-world environments, collaborate with professionals, and take on new challenges that push me forward in my tech career."
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always pushing boundaries and exploring new technologies to create impactful solutions."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Building solutions with attention to detail and accuracy that deliver real results."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine enthusiasm for AI and its potential to transform industries."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Committed to continuous learning and staying ahead in the rapidly evolving tech landscape."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/10 rounded-full animate-float"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
        </div>

        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-8 h-8 text-blue-400" />
              Who I Am
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>{personalInfo.introduction}</p>
              <p className="text-blue-400 font-medium italic">{personalInfo.passion}</p>
              <p>{personalInfo.background}</p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
              Current Focus
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {personalInfo.currentFocus}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">1+</div>
                <div className="text-sm text-gray-400">Hackathons Won</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">100+</div>
                <div className="text-sm text-gray-400">Hours Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            My Core <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              I'm always excited to collaborate on interesting projects or discuss new ideas in AI and technology. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="projects"
                className="bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-float {
          animation: float linear infinite;
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