import React, { useState, useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code,
  ExternalLink,
  CodeXml,
  Briefcase,
  User,
  BookOpen,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: BookOpen },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = ({ setActiveSection }) => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Web and Mobile Application Developer";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 2 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-down">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hanif Jamadar
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 h-10">
          {text}
          <span className="animate-blink">|</span>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
          data-tooltip-id="my-tooltip"
            data-tooltip-content="GitHub"
            data-tooltip-place="top"
            href="https://github.com/hanifjamadar77"
            className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Github size={32} />
            <Tooltip id="my-tooltip" />
          </a>
          <a
          data-tooltip-id="my-tooltip"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="top"
            href="https://www.linkedin.com/in/hanif-jamadar/"
            className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={32} />
            <Tooltip id="my-tooltip" />
          </a>
          <a
          data-tooltip-id="my-tooltip"
            data-tooltip-content="Email Me"
            data-tooltip-place="top"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jamadarmhanif@gmail.com"
            className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Mail size={32} />
            <Tooltip id="my-tooltip" />
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="LeetCode"
            data-tooltip-place="top"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jamadarmhanif@gmail.com"
            className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <CodeXml size={32} />
            <Tooltip id="my-tooltip" />
          </a>
        </div>
        <button
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
        >
          View My Work
        </button>
        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="text-white mx-auto" />
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Profile"
              className="relative rounded-lg shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed text-justify">
              I'm a Full Stack Developer who genuinely loves what I do. There's
              something incredibly satisfying about taking a complex problem and
              turning it into a clean, elegant solution. For me, coding isn't
              just a job it's how I bring ideas to life.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              What I really enjoy is being able to handle both sides of
              development building beautiful, responsive interfaces on the
              frontend and creating robust, scalable systems on the backend. I
              work primarily with React and React Native, and I've spent a lot
              of time getting comfortable with cloud technologies. But honestly,
              what keeps me excited is that there's always something new to
              learn. The tech world moves fast, and I'm the kind of person who
              enjoys staying on top of it all.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-blue-400 font-bold text-2xl">
                  B-Tech Final Year
                </h3>
                <p className="text-sm">I am a Fresher Now</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-blue-400 font-bold text-2xl">10+</h3>
                <p className="text-sm">Projects Completed</p>
              </div>
              {/* <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-blue-400 font-bold text-2xl">30+</h3>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-blue-400 font-bold text-2xl">10+</h3>
                <p className="text-sm">Awards Won</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration and real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with charts, forecasts, and location-based services.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["React", "API", "Charts.js"],
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolio websites with drag-and-drop functionality.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description:
        "Leading development of cloud-based applications and mentoring junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications for various clients across different industries.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      description:
        "Built responsive user interfaces and implemented modern frontend architectures.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-blue-500 hover:border-purple-500 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setStatus("Message sent! Thank you for reaching out.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's work together
            </h3>
            <p className="text-gray-300">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to
              collaborate!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={24} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={24} />
                <span>github.com/yourusername</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
                <span>linkedin.com/in/yourusername</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="5"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
            {status && <p className="text-green-400 text-center">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    if (activeSection) {
      scrollToSection(activeSection);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div id="home">
        <Hero setActiveSection={setActiveSection} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <footer className="bg-gray-950 py-8 text-center text-gray-400">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
