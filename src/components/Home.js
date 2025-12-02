// HeroProfile.jsx
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, MapPin, Briefcase, Award, CodeXml } from 'lucide-react';
import profile from "../assets/profile.jpg";
import Navbar from './Navbar';

export default function HeroProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const fullName = "Hanif Jamadar";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for name
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullName.length) {
        setText(fullName.substring(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    
    return () => clearInterval(typing);
  }, []);

  const badges = [
    { label: 'Linux', variant: 'blue' },
    { label: 'Java Programming', variant: 'blue' },
    { label: 'Frontend/Backend', variant: 'blue' }
  ];

  const roles = [
    { label: 'Project Managemant', variant: 'blue' },
    { label: 'Networking', variant: 'blue' }
  ];

  const stats = [
    { icon: MapPin, label: 'Location', value: 'Wagholi, Pune' },
    { icon: Briefcase, label: 'Expertise', value: 'Mobile App Developer' },
    { icon: Award, label: 'Certifications', value: 'Google/AWS/Azure' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hanifjamadar77', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hanif-jamadar/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jamadarmhanif@gmail.com', label: 'Email' },
    { icon: CodeXml, href: 'https://leetcode.com/u/V2KEOBa9pC/', label: 'LeetCode' },
    { icon: Instagram, href: 'https://www.instagram.com/iamhanif._/', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content - Added pt-20 for navbar spacing */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-32">
        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">{text}</span>
                <span className="animate-blink text-blue-400">|</span>
              </h1>
              <p className="text-xl text-gray-200 mb-6">Full Stack Mobile and Web Application Developer</p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-md font-medium hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105"
                    style={{
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-md font-medium hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    {role.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    style={{
                      animationDelay: `${idx * 0.2}s`
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-white font-semibold text-md">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Connect Section */}
            <div>
              <p className="text-gray-200 text-sm font-bold mb-4 uppercase tracking-wider">Connect</p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
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