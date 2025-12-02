import React, { useState } from 'react';
import { ExternalLink, Github} from 'lucide-react';
import workly from '../assets/Workly.jpg';
import fastFood from '../assets/food.png';
import blink from '../assets/blink.png';
import stock from '../assets/stock.png';
import aero from '../assets/aero.png';
import movieFlix from '../assets/movieFlix.jpg'; 

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile App'];

  const projects = [
    {
      id: 1,
      title: 'Workly: AI Powered Platform For Hyper Local Micro Job Finding',
      description: 'A comprehensive mobile application connecting blue-collar workers with job opportunities in their local area. Built with React Native and Expo.',
      image: workly,
      tags: ['React Native', 'Tailwind CSS', 'Typescript', 'ML', 'AI', 'Gio Location'],
      category: ['Mobile App','AI/ML'],
      demoLink: 'https://hanifjamadar77.github.io/workly-APK/',
      githubLink: 'https://github.com/hanifjamadar77/Workly-AI-Powered-Platform-for-Hyper-Local-Micro-Job-Finding-',
      featured: true
    },
    {
      id: 2,
      title: 'Fast Food App',
      description: 'A modern, full-stack mobile application for food ordering built with React Native (Expo) and powered by Appwrite. This app provides users with seamless browsing of menu items, customizable orders, cart management, and secure authentication — all in one place.',
      image: fastFood,
      tags: ['React Native', 'Tailwind CSS','Expo', 'Content Filtering'],
      category: ['Mobile App'],
      demoLink: 'https://expo.dev/accounts/hanif_jamadar/projects/Food_Delivery_App',
      githubLink: 'https://github.com/hanifjamadar77/Fast-Food-App',
      featured: false
    },
    {
      id: 3,
      title: 'BlinkType-Assist ',
      description: 'BlinkType Assist is an assistive typing app for individuals with motor impairments. Using Python, OpenCV, and dlib, it enables hands-free interaction with a virtual keyboard through eye gaze navigation and blinking gestures for text input. Designed to enhance communication and digital interaction.',
      image: blink,
      tags: ['Python', 'OpenCV', 'dlib', 'Facial Landmark Predictor'],
      category: ['AI/ML'],
      demoLink: 'https://github.com/hanifjamadar77/BlinkType-Assist',
      githubLink: 'https://github.com/hanifjamadar77/BlinkType-Assist',
      featured: true
    },
    {
      id: 4,
      title: 'Stock Price Prediction Using Machine Learning In Python',
      description: 'This project is a Stock Price Prediction Website built with Python. It uses Streamlit to provide a simple and interactive web interface, and a Machine Learning model implemented in TensorFlow to predict future stock prices based on historical data.',
      image: stock,
      tags: ['Python', 'Streamlit', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
      category: ['Web Development','AI/ML'],
      demoLink: 'https://github.com/hanifjamadar77/Stock-Price-Prediction',
      githubLink: 'https://github.com/hanifjamadar77/Stock-Price-Prediction',
      featured: true
    },
    {
      id: 5,
      title: 'Aero - The Weather App',
      description: 'A weather application that provides real-time weather updates for any location. Built with HTML/CSS/JavaScript, the app features a clean, user-friendly interface and displays current weather conditions, temperature, humidity, wind speed. ',
      image: aero,
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather APIs'],
      category: 'Web Development',
      demoLink: 'https://github.com/hanifjamadar77/Aero---The-Weather-App-',
      githubLink: 'https://github.com/hanifjamadar77/Aero---The-Weather-App-',
      featured: false
    },
    {
      id: 6,
      title: 'MovieFlix',
      description: 'MovieFlix is a React Native app (built with Expo) for exploring and discovering movies. Search for any movie, view details, and get personalized recommendations based on what users are searching for.',
      image: movieFlix,
      tags: ['React Native', 'Tailwind CSS', 'TMDb APIs', 'Expo', 'Appwrite'],
      category: 'Mobile App',
      demoLink: 'https://expo.dev/preview/update?message=Update+README.md%0A%0AProject+screenshots+add&updateRuntimeVersion=1.0.0&createdAt=2025-09-23T19%3A27%3A38.432Z&slug=exp&projectId=12fff959-e233-4cba-9f13-606cdee39184&group=dd210c46-2c5d-4c53-8053-6e3458f4697e',
      githubLink: 'https://github.com/hanifjamadar77/MovieFlix',
      featured: false
    },
    {
      id: 7,
      title: 'TextUtils - React App',
      description: 'Real-time social media sentiment analysis and engagement tracking platform with data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'NLP'],
      category: 'Data Science',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'APIs'],
      category: 'Mobile App',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 9,
      title: 'Neural Style Transfer',
      description: 'Deep learning application that applies artistic styles to images using convolutional neural networks.',
      image: 'https://images.unsplash.com/photo-1561214078-f3247647fc5e?w=600&h=400&fit=crop',
      tags: ['TensorFlow', 'CNN', 'Python', 'Deep Learning'],
      category: 'AI/ML',
      demoLink: '#',
      githubLink: '#',
      featured: true
    }
  ];

  const filteredProjects = projects.filter(pro => {
    const matchesCategory = filter === 'All' || 
      (Array.isArray(pro.category) 
        ? pro.category.includes(filter) 
        : pro.category === filter);
    const matchesSearch = pro.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pro.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-2">
            A collection of my major works<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></span>
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2"
              style={{
                animationDelay: `${idx * 0.1}s`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 to-purple-900/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.githubLink}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demoLink}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    title="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.githubLink}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demoLink}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
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

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}