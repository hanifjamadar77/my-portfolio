import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Filter, Search } from 'lucide-react';

export default function CertificationsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Tech', 'AI/ML', 'Web Development', 'Cloud', 'Others'];

  const certifications = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'Organized by Tech and Others',
      date: 'December 1, 2023',
      category: ['AI/ML', 'Tech'],  // Multiple categories as array
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
    },
    {
      title: 'Computer Vision with TensorFlow',
      issuer: 'Organized by Tech and Others',
      date: 'December 1, 2023',
      category: ['AI/ML', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop'
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Organized by Tech and Others',
      date: 'November 15, 2023',
      category: ['Cloud', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Organized by Tech and Others',
      date: 'October 20, 2023',
      category: ['Web Development', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
    },
    {
      title: 'Python for Data Science',
      issuer: 'Organized by Tech and Others',
      date: 'September 5, 2023',
      category: ['Tech', 'AI/ML'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
    },
    {
      title: 'Machine Learning A-Z',
      issuer: 'Organized by Tech and Others',
      date: 'August 12, 2023',
      category: ['AI/ML', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop'
    },
    {
      title: 'Docker & Kubernetes',
      issuer: 'Organized by Tech and Others',
      date: 'July 28, 2023',
      category: ['Cloud', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop'
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Organized by Tech and Others',
      date: 'June 14, 2023',
      category: ['Web Development', 'Tech'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Organized by Tech and Others',
      date: 'May 3, 2023',
      category: ['Tech', 'Others'],
      certificateUrl: '#',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop'
    }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = filter === 'All' || 
      (Array.isArray(cert.category) 
        ? cert.category.includes(filter) 
        : cert.category === filter);
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Certifications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Organized by Tech and Others
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-blue-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 w-full md:w-64"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {Array.isArray(cert.category) ? (
                    cert.category.map((cat, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 rounded-full text-xs font-medium">
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 rounded-full text-xs font-medium">
                      {cert.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                {/* View Button */}
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  View
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-20">
            <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No certifications found matching your criteria.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">{certifications.length}+</div>
            <div className="text-gray-400 text-sm">Total Certifications</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Platforms</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-pink-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-400 mb-2">2023</div>
            <div className="text-gray-400 text-sm">Latest Year</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Completion Rate</div>
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