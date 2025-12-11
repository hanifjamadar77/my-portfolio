import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jamadarmhanif@gmail.com',
      link: 'mailto:jamadarmhanif@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8485037484',
      link: 'tel:8485037484'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Wagholi, Pune, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hanifjamadar77', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hanif-jamadar/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jamadarmhanif@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/iamhanif._/', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10 max-w-2xl w-full mx-auto px-6 py-20">
        {/* Main Contact Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="text-center p-8 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Connect & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Collaborate</span> 🤝
            </h1>
            <p className="text-gray-400 text-lg">
              Whether it's a new project, a collaboration, or just to say hi — I'm always up to hear from you!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 px-8 pb-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Contact Info Footer */}
          <div className="bg-slate-950/50 border-t border-gray-800/50 p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-white font-medium mb-1">{info.title}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">{info.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            💡 Usually respond within 24 hours
          </p>
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
