import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet, HashRouter } from 'react-router-dom';
import Header from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
     <BrowserRouter basename="/my-portfolio"> 
     <Header/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="skills" element={<Skills />} />  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
