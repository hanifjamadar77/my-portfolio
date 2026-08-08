import React, { useState } from 'react';
import { Award, Search, Calendar, ExternalLink } from 'lucide-react';
import navot from '../assets/certificates_logo/navot.png';
import nptel from '../assets/certificates_logo/nptel.png';
import ieee from '../assets/certificates_logo/ieee.jpg';
import iitb from '../assets/certificates_logo/iit.jpg';
import infosys from '../assets/certificates_logo/infosys.jpg';
import ibm from '../assets/certificates_logo/ibm.jpg';
import mkcl from '../assets/certificates_logo/mscit.jpg';

export default function CertificationsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All',
  'Programming',
  'Web Development',
  'AI/ML',
  'Data Science',
  'Research',
  'Internship',
  'Hackathon',
  'Soft Skills'];

  const certifications = [
    {
    title: "Full Stack Developer Internship",
    issuer: "Navotkarsha IT Solutions Pvt. Ltd.",
    date: "June 2026",
    category: ["Internship", "Full Stack Development"],
    certificateUrl: "https://drive.google.com/file/d/1ARdVksSCJGQpZDAY8SmyZNsR-guy5e_h/view?usp=drive_link",
    image: navot
  },
   {
    title: "IEEE Conference Participation",
    issuer: "IEEE",
    date: "2026",
    category: ["Research", "Conference"],
    certificateUrl: "https://drive.google.com/file/d/1Qdij1mnio_tvqYU1QUtqlcw2RI5T-0Uq/view?usp=drive_link",
    image: ieee
  },
{
    title: "Advanced C++ Programming",
    issuer: "IIT Bombay",
    date: "2024",
    category: ["Programming", "C++"],
    certificateUrl: "https://drive.google.com/file/d/1FpCjAL51yaSfWU5x1Tn4_hQtoQhiLRN8/view?usp=drive_link",
    image: iitb
  },
  {
    title: "Python Training",
    issuer: "IIT Bombay",
    date: "2024",
    category: ["Python", "Programming"],
    certificateUrl: "https://drive.google.com/file/d/13m5L9ncU4hC3RmpQ1FonwDZjVRtYJxjr/view?usp=drive_link",
    image: iitb
  },
  {
    title: "CSS3 Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    category: ["Web Development", "Frontend"],
    certificateUrl: "https://drive.google.com/file/d/1KkObwB_u2zKEZpeuHSyuX24mU9_TlkZ7/view?usp=drive_link",
    image: infosys
  },
  {
    title: "Data Science Certification",
    issuer: "IBM",
    date: "2024",
    category: ["Data Science", "AI/ML"],
    certificateUrl: "https://drive.google.com/file/d/1q2LCcWVF8LtrtqxpSR3DvXirDp_Tp_0G/view?usp=drive_link",
    image: ibm
  },
  {
    title: "Machine Learning Certification",
    issuer: "IBM",
    date: "2024",
    category: ["AI/ML", "Machine Learning"],
    certificateUrl: "https://drive.google.com/file/d/1emW_JoNaKynWf7cjnUvjE6F-XBpAvsJo/view?usp=drive_link",
    image: ibm
  },
  {
    title: "Smart India Hackathon",
    issuer: "Government of India",
    date: "2024",
    category: ["Hackathon", "Innovation"],
    certificateUrl: "https://drive.google.com/file/d/1fQPkc-Sf93nPY_UifxlKQWjsuxc8pmSi/view?usp=drive_link",
    image: "https://i.pinimg.com/1200x/0b/23/7f/0b237fe3cafbbe0fabb298373f27fc10.jpg"
  },
  {
    title: "Internet of Things",
    issuer: "NPTEL",
    date: "2026",
    category: ["IoT", "Technology"],
    certificateUrl: "https://drive.google.com/file/d/1IN5Xr66u_dwqOGAQf4aVDxIOmjI3Tksv/view?usp=drive_link",
    image: nptel
  },
  {
    title: "Enhancing Soft Skills & Personality",
    issuer: "NPTEL",
    date: "2025",
    category: ["Soft Skills", "Professional Development"],
    certificateUrl: "https://drive.google.com/file/d/1Gq3dmNC0tQIa-49_O3xt4ey9PK3kTFMv/view?usp=drive_link",
    image: nptel
  },
  {
    title: "MS-CIT",
    issuer: "MKCL",
    date: "2021",
    category: ["Computer Fundamentals", "IT"],
    certificateUrl: "https://drive.google.com/file/d/1MQa1zfgp6lEUDBZs62y0iD0x_QLnRqXQ/view?usp=drive_link",
    image: mkcl
  }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory =
      filter === 'All' ||
      (Array.isArray(cert.category)
        ? cert.category.includes(filter)
        : cert.category === filter);
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/10 rounded-full animate-float"
            style={{
              width: (i * 7 + 50) + 'px',
              height: (i * 7 + 50) + 'px',
              top: (i * 6.5) % 100 + '%',
              left: (i * 6.8) % 100 + '%',
              animationDelay: (i * 0.4) + 's',
              animationDuration: (i % 5 + 10) + 's'
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
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-blue-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                {/* Category Badges */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end">
                  {(Array.isArray(cert.category) ? cert.category : [cert.category]).map((cat, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{cert.date}</span>
                </div>

                {/* Spacer pushes button to bottom */}
                <div className="mt-auto">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-20">
            <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No certifications found matching your criteria.</p>
            <button
              onClick={() => { setFilter('All'); setSearchTerm(''); }}
              className="mt-4 text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: `${certifications.length}+`, label: 'Total Certifications', color: 'text-blue-400', hover: 'hover:border-blue-500/50' },
            // { value: '5+', label: 'Platforms', color: 'text-purple-400', hover: 'hover:border-purple-500/50' },
            { value: '2026', label: 'Latest Year', color: 'text-pink-400', hover: 'hover:border-pink-500/50' },
            { value: '100%', label: 'Completion Rate', color: 'text-green-400', hover: 'hover:border-green-500/50' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 ${stat.hover}`}
            >
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25%       { transform: translateY(-20px) translateX(10px); }
          50%       { transform: translateY(-40px) translateX(-10px); }
          75%       { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float linear infinite; }
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}