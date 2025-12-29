import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  FileText,
  Download,
} from "lucide-react";
import resume from "../assets/Resume.pdf";

export default function ResumePage() {
  const [showPreview, setShowPreview] = useState(false);

  // Resume Data
  const resumeData = {
    name: "Hanif Jamadar",
    title: "B.Tech in Computer Engineering | Full Stack Developer",
    location: "Pune, India",
    email: "jamadarmhanif@gmail.com",
    phone: "+91 8485037484",
    linkedin: "linkedin.com/in/hanif-jamadar",
    github: "github.com/hanifjamadar77",
    summary:
      "Quick summary below and full resume preview with download option.",

    // projects: [
    //   {
    //     title: "Smart Cancer Detection from Histopathology using YOLO & CNN",
    //     description: "Developed a cancer detection system using deep learning techniques with YOLO and CNN architectures for accurate histopathological image analysis.",
    //     technologies: ["Python", "TensorFlow", "YOLO", "CNN"]
    //   },
    //   {
    //     title: "Mental Health Analysis using NLP and BERT",
    //     description: "Built an NLP-based mental health analysis tool using BERT for sentiment analysis and emotion detection from text data.",
    //     technologies: ["Python", "BERT", "NLP", "PyTorch"]
    //   },
    //   {
    //     title: "Indian Sign Language Interpreter AI Program",
    //     description: "Created an AI-powered interpreter for Indian Sign Language using computer vision and deep learning for real-time gesture recognition.",
    //     technologies: ["OpenCV", "TensorFlow", "Python", "CNN"]
    //   },
    //   {
    //     title: "Generative Content-Gen AI and Summarization ChatBot based on GenAI",
    //     description: "Developed a generative AI chatbot capable of content generation and text summarization using advanced language models.",
    //     technologies: ["GPT", "LangChain", "Python", "API"]
    //   }
    // ],

    // experience: [
    //   {
    //     title: "AI/ML Engineer",
    //     company: "Tech Solutions Inc",
    //     period: "2023 - Present",
    //     description: "Building and deploying machine learning models for production environments.",
    //     responsibilities: [
    //       "Developed end-to-end ML pipelines",
    //       "Implemented computer vision solutions",
    //       "Optimized model performance and scalability"
    //     ]
    //   },
    //   {
    //     title: "Machine Learning Intern",
    //     company: "Innovation Labs",
    //     period: "2022 - 2023",
    //     description: "Worked on NLP and computer vision projects.",
    //     responsibilities: [
    //       "Trained deep learning models",
    //       "Conducted research on state-of-the-art techniques",
    //       "Collaborated with cross-functional teams"
    //     ]
    //   }
    // ],

    education: [
      {
        degree: "B.Tech in Computer Engineering",
        institution: "G H Raisoni College of Engineering and Management, Pune",
        period: "2023 - 2026",
        cgpa: "79 (8.65 cgpa)",
        achievements: [
          "Smart India Hackathon certificate at college level.",
          "Hacktoberfest Jam (Microsoft Learn Student Ambassador Club).",
          'Certificate for the Completion of Advanced Python Training (IIT Bombay).',
        ],
      },
      {
        degree: "Diploma in Computer Science and Engineering",
        institution: "Maharashtra State Board of Technical Education, Mumbai",
        period: "2021 - 2023",
        cgpa: "87.20",
        achievements: [
          "First Rank – Diploma in Computer Science",
          "3rd Rank – State Level Technical Paper Presentation",
        ],
      },

      {
        degree: " Shri Shivachaleshwar High School & JR.College , Maindargi Dist. Solapur. ",
        institution: "Maharashtra State Board of Secondary & Higher Education, Pune ",
        period: "2020",
        cgpa: "92.60",
        achievements: [
          "First Rank in Class 10",
        ],
      },
    ],

    skills: {
      Programming: ["Python", "C++", "Java", "JavaScript"],
      "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      Web: ["React", "Node.js", "Flask", "Django"],
      Database: ["MongoDB", "MySQL", "PostgreSQL"],
      Tools: ["Git", "Docker", "AWS", "Jupyter"],
    },

    achievements: [
      "1st Place - GDSC Solution Challenge 2023",
      "Winner - Smart India Hackathon 2022",
      "Published 2 research papers in AI conferences",
      "Contributed to 5+ open source projects",
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
            {/* Projects Section */}
            {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Projects & Experience</h2>
              </div>
              <div className="space-y-6">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="border-l-2 border-blue-500 pl-6 pb-6 last:pb-0">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Experience Section */}
            {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="space-y-6">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500 pl-6 pb-6 last:pb-0">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-400 mb-3">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}

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
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">•</span>
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
            {/* Skills Section */}
            {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Key Skills</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skills], idx) => (
                  <div key={idx}>
                    <h3 className="text-blue-400 font-semibold mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Achievements Section */}
            {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Achievements</h2>
              </div>
              <ul className="space-y-3">
                {resumeData.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">🏆</span>
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div> */}

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
              </div>
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

            {/* Resume Preview Frame */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gray-100 flex items-center justify-center relative">
                {/* Method 1: Image Preview (Recommended) */}
                {/* <img 
                  src="/path-to-your-resume-image.png" 
                  alt="Resume Preview"
                  className="w-full h-auto max-h-[1000px] object-contain"
                /> */}

                {/* Method 2: Embedded PDF (Alternative) */}
                <iframe
                  src={resume}
                  className="w-full h-[1000px] border-0"
                  title="Resume Preview"
                />
              </div>
            </div>

            {/* Download Button Below Preview */}
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
