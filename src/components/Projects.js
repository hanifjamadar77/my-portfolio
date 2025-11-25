import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile App', 'Data Science', 'Cloud'];

  const projects = [
    {
      id: 1,
      title: 'AI Homeopathy Management',
      description: 'Utilized Llama 3 256k LLM model for long-context analysis and integrated with Pinecone vector database for efficient similarity search.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      tags: ['Python', 'Llama', 'Pinecone', 'AI'],
      category: 'AI/ML',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Indian Sign Language Recognition',
      description: 'Real-time Indian sign language recognition and translation system using Machine Learning. Developed with advanced ML algorithms for accurate gesture detection.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop',
      tags: ['TensorFlow', 'Computer Vision', 'Python', 'ML'],
      category: 'AI/ML',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Annotate AI - General AI Chatbot',
      description: 'An advanced AI-powered chatbot using GPT and Natural Language Processing for intelligent conversations and assistance.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      tags: ['React', 'OpenAI', 'Node.js', 'GPT'],
      category: 'AI/ML',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Prediction Model',
      description: 'Machine learning model for accurate weather forecasting using historical data and advanced predictive algorithms.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      category: 'Data Science',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management system with cost optimization and performance monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Social Media Analytics',
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

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            A collection of my major works — <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">blending research</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI innovation, and modern UI design
          </p>
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
                    href={project.demoLink}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    title="Live Demo"
                  >
                    <Play size={20} />
                  </a>
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