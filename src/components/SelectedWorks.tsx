import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ExternalLink } from 'lucide-react';
import img1 from '../../website dev/NEOFATBURY.co.in.png';
import img2 from '../../website dev/enfermeraentucasa.es.png';
import img3 from '../../website dev/agenziamemorial.png';
import img4 from '../../website dev/eminpasha.com.png';

const projects = [
  { 
    title: "Neofatbury", colSpan: "md:col-span-7", img: img1,
    url: "https://neofatbury.co.in/",
    techStack: ["Next.js", "React.js", "Vue", "Vercel", "Sanity CMS", "Zoho CRM", "GoDaddy", "Custom Theme"],
    description: "Website development for a Hyderabad-based client.",
    specification: "A robust platform for bariatric and metabolic surgery, designed with patient accessibility in mind."
  },
  { 
    title: "Enfermera en tu casa", colSpan: "md:col-span-5", img: img2,
    url: "https://enfermeraentucasa.es/",
    techStack: ["Next.js", "React.js", "Vue", "Vercel", "GoDaddy", "Sanity CMS", "Wix Redirection", "SEO"],
    description: "Website development for the medical industry.",
    specification: "Professional home nursing services platform with easy patient onboarding and clear service discovery."
  },
  { 
    title: "Agenzia Memorial", colSpan: "md:col-span-5", img: img3,
    url: "https://www.agenziamemorial.com/",
    techStack: ["WordPress", "Elementor"],
    description: "Website development for the funeral industry.",
    specification: "A comprehensive digital presence providing memorial services."
  },
  { 
    title: "The Emin Pasha Hotel", colSpan: "md:col-span-7", img: img4,
    url: "https://eminpasha.com/", 
    techStack: ["WordPress", "WP Bakery", "Elementor", "Booking Plugin"],
    description: "Luxury Hotel Website in Africa.",
    specification: "A comprehensive booking platform for a luxury hotel & spa."
  }
];

export function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-sm">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          
          {/* Desktop button */}
          <Link to="/work" className="hidden md:inline-flex group relative rounded-full overflow-hidden mt-6 md:mt-0">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-sm px-6 py-3 border border-stroke bg-bg text-text-primary rounded-full flex items-center gap-2">
              View all work <span>→</span>
            </div>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(project)}
              className={`${project.colSpan} relative group overflow-hidden bg-surface border border-stroke rounded-3xl aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer`}
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                
                {/* Hover Label */}
                <div className="relative rounded-full overflow-hidden scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <span className="absolute inset-[0px] rounded-full accent-gradient" />
                  <div className="relative m-[1px] bg-white rounded-full px-6 py-3 text-bg text-sm">
                    View — <span className="font-display italic">{project.title}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-bg/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-bg/50 backdrop-blur-md border border-stroke rounded-full flex items-center justify-center text-text-primary hover:bg-bg transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative border-b md:border-b-0 md:border-r border-stroke">
                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-px bg-stroke" />
                    <span className="text-xs text-muted uppercase tracking-[0.3em]">Project Details</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl text-text-primary font-display mb-2">{selectedProject.title}</h3>
                  <p className="text-muted mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm text-text-primary font-bold mb-2 uppercase tracking-wider">Specifications</h4>
                    <p className="text-muted text-sm leading-relaxed">{selectedProject.specification}</p>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-sm text-text-primary font-bold mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-bg border border-stroke rounded-full text-xs text-text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-stroke">
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative rounded-full overflow-hidden inline-flex w-full sm:w-auto"
                    >
                      <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full text-sm px-8 py-3.5 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors rounded-full flex items-center justify-center gap-2">
                        Visit Website <ExternalLink size={16} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
