import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Preloader from './components/Preloader/Preloader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import HeroSection from './components/Hero/HeroSection';
import GallerySection from './components/Gallery/GallerySection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import Scene from './Scene';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import ProjectOverlay from './components/Gallery/ProjectOverlay';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  // Listen for project click events from the 3D cards
  useEffect(() => {
    const handleOpenProject = (e) => {
      setActiveProject(e.detail);
    };
    window.addEventListener('open-project', handleOpenProject);
    return () => window.removeEventListener('open-project', handleOpenProject);
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Preloader sits on top until progress reaches 100% */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      
      {/* The Premium Unified 3D Background System */}
      <div className="canvas-container" style={{ opacity: preloaderDone ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>
      
      <main style={{ opacity: preloaderDone ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <HeroSection />
        {/* Gallery section now just provides empty scroll space for the orbital ring */}
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <div style={{ opacity: preloaderDone ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <Footer />
      </div>

      {/* Premium Project Details Overlay */}
      <ProjectOverlay project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

export default App;
