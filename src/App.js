import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet, HashRouter } from 'react-router-dom';
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
     <HashRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="skills" element={<Skills />} />
        <Route path="skills" element={<Skills />} />
        <Route path="skills" element={<Skills />} />
        <Route path="skills" element={<Skills />} />
        
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
