import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  FileText,
  Download,
  Instagram,
} from "lucide-react";
import resume from "../assets/Resume.pdf";

export default function ResumePage() {
  const [showPreview, setShowPreview] = useState(false);

  const resumeData = {
    name: "Hanif Jamadar",
    title: "B.Tech in Computer Engineering | Full Stack Developer",
    location: "Pune, India",
    email: "jamadarmhanif@gmail.com",
    phone: "+91 8485037484",
    linkedin: "linkedin.com/in/hanif-jamadar",
    github: "github.com/hanifjamadar77",
    insta : "instagram.com/iamhanif._/",
    summary:
      "Quick summary below and full resume preview with download option.",

    experience: [
      {
        title: "Full Stack Developer Intern",
        company: "Navotkarsha IT Solutions PVT. LTD",
        period: "December 2025 – June 2026 · 6 months",
        type: "Internship",
        description:
          "Worked on full-stack web and mobile application development, contributing to UI/UX design, frontend and backend implementation, cloud integration, testing, and deployment. Developed multiple projects including a MERN Authentication System, WorkTrack Worker Attendance App, and Roomify AI-powered Floor Plan Visualizer.",
        responsibilities: [
          "Designed and developed responsive user interfaces using React.js and React Native, translating Figma prototypes into functional applications.",
          "Built and integrated backend services using Node.js, Express.js, MongoDB, and Appwrite for authentication, database management, and cloud storage.",
          "Developed a complete MERN Authentication System with JWT authentication, email verification, password reset functionality, and protected routes.",
          "Implemented attendance tracking, salary calculation, worker management, and dashboard features for the WorkTrack mobile application using React Native and Appwrite.",
          "Contributed to the development of Roomify, an AI-powered floor plan visualization platform that converts 2D floor plans into interactive 3D visualizations.",
          "Integrated cloud services, managed API communication, performed testing and debugging, and optimized application performance across multiple projects.",
          "Collaborated with mentors and team members during requirement analysis, design reviews, feature implementation, and project demonstrations.",
        ],
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Engineering",
        institution: "G H Raisoni College of Engineering and Management, Pune",
        period: "2023 – 2026",
        cgpa: "78.7% (8.62 CGPA)",
        achievements: [
          "Smart India Hackathon certificate at college level.",
          "Hacktoberfest Jam — Microsoft Learn Student Ambassador Club.",
          "Certificate for Completion of Advanced Python Training — IIT Bombay.",
        ],
      },
      {
        degree: "Diploma in Computer Science and Engineering",
        institution: "Maharashtra State Board of Technical Education, Mumbai",
        period: "2021 – 2023",
        cgpa: "87.20%",
        achievements: [
          "First Rank – Diploma in Computer Science.",
          "3rd Rank – State Level Technical Paper Presentation.",
        ],
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution:
          "Shri Shivachaleshwar High School & Jr. College, Maindargi, Dist. Solapur · Maharashtra State Board",
        period: "2020",
        cgpa: "92.60%",
        achievements: ["First Rank in Class 10."],
      },
    ],

    // skills: {
    //   Programming: ["Python", "C++", "Java", "JavaScript"],
    //   "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    //   Web: ["React", "Node.js", "Flask", "Django"],
    //   Database: ["MongoDB", "MySQL", "PostgreSQL"],
    //   Tools: ["Git", "Docker", "AWS", "Jupyter"],
    // },

    achievements: [
      "Research Paper Accepted & Presented at IEEE IATMSI-2026 Conference",
      "Earned Advanced Python Certification from IIT Bombay",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {resumeData.name}
          </h1>
          <p className="text-2xl text-gray-400 mb-6">{resumeData.title}</p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            {resumeData.summary}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{resumeData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{resumeData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{resumeData.location}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              {showPreview ? "Hide Preview" : "View Resume"}
            </button>
            <a
              href={resume}
              download="Hanif_Jamadar_Resume.pdf"
              className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-full font-medium hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Details Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>

              <div className="space-y-8">
                {resumeData.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-blue-500 pl-6 pb-6 last:pb-0"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-400 text-sm mb-3 italic">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-300 flex items-start text-sm leading-relaxed"
                        >
                          <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-green-500 pl-6 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-400 mb-3">
                      Percentage:{" "}
                      <span className="text-white font-bold">{edu.cgpa}</span>
                    </p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 flex items-start text-sm"
                        >
                          <span className="text-green-400 mr-2 flex-shrink-0">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Connect</h2>
              <div className="space-y-3">
                <a
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">{resumeData.linkedin}</span>
                </a>
                <a
                  href={`https://${resumeData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">{resumeData.github}</span>
                </a>
                <a
                  href={`https://www.${resumeData.insta}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">{resumeData.insta}</span>
                </a>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Achievements
              </h2>
              <ul className="space-y-3">
                {resumeData.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start text-sm"
                  >
                    <span className="text-yellow-400 mr-2 flex-shrink-0">
                      ★
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Resume Preview Section */}
        {showPreview && (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Resume Preview</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gray-100 flex items-center justify-center relative">
                <iframe
                  src={resume}
                  className="w-full h-[1000px] border-0"
                  title="Resume Preview"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href={resume}
                download="Hanif_Jamadar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Full Resume
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
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
