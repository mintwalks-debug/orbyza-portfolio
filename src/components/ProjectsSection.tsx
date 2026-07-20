import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import img1 from '../../website dev/NEOFATBURY.co.in.png';
import img2 from '../../website dev/eminpasha.com.png';
import img3 from '../../website dev/enfermeraentucasa.es.png';
import img4 from '../../website dev/agenziamemorial.png';
import img5 from '../../website dev/askdogtrainers.png';
import img6 from '../../website dev/ashcircelassociates.com.png';
import img7 from '../../website dev/Voxeldata.com.au.png';
import img8 from '../../website dev/kumarprinter.com.png';
import img12 from '../../website dev/ivybridge.png';
import img22 from '../../website dev/farm-to-fork-bliss.png';

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  techStack?: string[];
  specification?: string;
}

const projects: Project[] = [
  {
    title: "Neofatbury",
    description: "Website development for a Hyderabad-based client.",
    image: img1,
    url: "https://neofatbury.co.in/",
    techStack: ["Next.js", "React.js", "Vue", "Vercel", "Sanity CMS", "Zoho CRM", "GoDaddy", "Custom Theme"],
    specification: "A robust platform for bariatric and metabolic surgery, designed with patient accessibility in mind."
  },
  {
    title: "Emin Pasha",
    description: "Luxury Hotel Website in Africa.",
    image: img2,
    url: "https://eminpasha.com/",
    techStack: ["WordPress", "WP Bakery", "Elementor", "Booking Plugin"],
    specification: "A comprehensive booking platform for a luxury hotel & spa."
  },
  {
    title: "Enfermera en tu casa",
    description: "Website development for the medical industry.",
    image: img3,
    url: "https://enfermeraentucasa.es/",
    techStack: ["Next.js", "React.js", "Vue", "Vercel", "GoDaddy", "Sanity CMS", "Wix Redirection", "SEO"],
    specification: "Professional home nursing services platform with easy patient onboarding and clear service discovery."
  },
  {
    title: "Agenzia Memorial",
    description: "Website development for the funeral industry.",
    image: img4,
    url: "https://www.agenziamemorial.com/",
    techStack: ["WordPress", "Elementor"],
    specification: "A comprehensive digital presence providing memorial services."
  },
  {
    title: "Ask Dog Trainers",
    description: "Improved the indexing from 126 to 2350 + SEO",
    image: img5,
    url: "https://askdogtrainers.com/",
    techStack: ["SEO", "Indexing", "Analytics"]
  },
  {
    title: "Ash Circle Associates",
    description: "Made the correction on wordpress website + SEO",
    image: img6,
    url: "https://ashcircleassociates.com/",
    techStack: ["WordPress", "SEO"]
  },
  {
    title: "Voxel Data",
    description: "Wordpress + elementor + Basic SEO",
    image: img7,
    url: "https://voxeldata.com.au/",
    techStack: ["WordPress", "Elementor", "Basic SEO"]
  },
  {
    title: "Kumar Printer",
    description: "Made the website on next.js + react.js+ Vue + vercel",
    image: img8,
    url: "https://www.kumarprinter.com/",
    techStack: ["Next.js", "React.js", "Vue", "Vercel"]
  },
  {
    title: "Callgirl4u",
    description: "Made the website on next.js + react.js + SEO+ Vercel",
    image: "/screenshots/project3.jpg",
    url: "https://callgirl4u.com/",
    techStack: ["Next.js", "React.js", "SEO", "Vercel"]
  },
  {
    title: "Kokasite",
    description: "Made the website on next.js+ vercel + SEO",
    image: "/screenshots/project5.jpg",
    url: "https://kokasite.com/",
    techStack: ["Next.js", "Vercel", "SEO"]
  },
  {
    title: "Diksha Wellness Builder",
    description: "Made the website on next.js + react.js+ Vue+ SEO + vercel",
    image: "/screenshots/project7.jpg",
    url: "https://diksha-wellness-builder.vercel.app/",
    techStack: ["Next.js", "React.js", "Vue", "SEO", "Vercel"]
  },
  {
    title: "Ivy Bridge Study",
    description: "Made website on react + js+ vercel Mr. satyaprakash from Thailand",
    image: img12,
    url: "https://ivybridgestudy.com/",
    techStack: ["React", "JS", "Vercel"]
  },
  {
    title: "Dr. Faus Home Clinic",
    description: "Made the website for doctor clinic on Elementor+Btheme + Woo commerce + Direct Bank Integration",
    image: "/screenshots/project10.jpg",
    url: "https://drfaushomeclinic.net/",
    techStack: ["Elementor", "Btheme", "WooCommerce", "Bank Integration"]
  },
  {
    title: "Nails by Abel",
    description: "Trial website for the nails salon on Bootstrap",
    image: "/screenshots/project2.jpg",
    url: "https://nails-by-abel.vercel.app/",
    techStack: ["Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Pramod Plumber Services",
    description: "Made the website for plumber on Html+ CSS+ Js + vercel",
    image: "/screenshots/project1.jpg",
    url: "https://pramod-plumber-services.vercel.app/",
    techStack: ["HTML", "CSS", "JS", "Vercel"]
  },
  {
    title: "Bake in Town Jaipur",
    description: "Trial website for a bakery that sells inhouse made cakes on next.js+ react .js",
    image: "/screenshots/project9.jpg",
    url: "https://bake-in-town-jaipur.vercel.app/",
    techStack: ["Next.js", "React.js"]
  },
  {
    title: "Skin Camouflage",
    description: "Trial website for the skin care clinic HTML + CSS+ JS",
    image: "/screenshots/skincamouflage.jpg",
    url: "https://skincamouflage.vercel.app/",
    techStack: ["HTML", "CSS", "JS"]
  },
  {
    title: "Takoma Park MD Real Estate",
    description: "Dummy wordpress website project for US with elementor wpo contact form targeting takomamaryland",
    image: "/screenshots/takomapark.jpg",
    url: "https://takomaparkmdrealestate.com/",
    techStack: ["WordPress", "Elementor", "WPO Contact Form"]
  },
  {
    title: "Crocs",
    description: "Trial website for a project with react.js + tailwinds + vercel+ mongodb for admin panel",
    image: "/screenshots/crocs.jpg",
    url: "https://crocs-rust.vercel.app/",
    techStack: ["React.js", "TailwindCSS", "Vercel", "MongoDB"]
  },
  {
    title: "Nova Spotify Clone",
    description: "Inhouse music player webapp on react + vercel",
    image: "/screenshots/novaspotify.jpg",
    url: "https://nova-spotify-clone.vercel.app/",
    techStack: ["React", "Vercel"]
  },
  {
    title: "Property Lords BBSE",
    description: "Trial website for real estate on react + vercel",
    image: "/screenshots/project11.jpg",
    url: "https://propertylordsbbse.vercel.app/",
    techStack: ["React", "Vercel"]
  },
  {
    title: "Farm to Fork Bliss",
    description: "Website for client on react + react router + Luicide font + Radix UI + shadcn/ui + tailwinds",
    image: img22,
    url: "https://farm-to-fork-bliss.vercel.app/",
    techStack: ["React", "React Router", "Lucide", "Radix UI", "shadcn/ui", "TailwindCSS"]
  }
];

function ProjectItem({ project, onClick }: { project: Project, onClick: () => void }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: '0.1s' }}
    >
      <div className="ml-20 md:ml-28">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block group cursor-pointer">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {project.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lg ml-1">↗</span>
            </h3>
          </a>
        ) : (
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            {project.title}
          </h3>
        )}
        <p className="text-sm md:text-base text-muted">{project.description}</p>
      </div>
      
      {project.url ? (
        <div onClick={onClick} className="block overflow-hidden rounded-2xl shadow-lg cursor-pointer relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="bg-bg text-text-primary px-6 py-3 rounded-full text-sm">View Details</div>
          </div>
        </div>
      ) : (
        <div onClick={onClick} className="w-full rounded-2xl shadow-lg overflow-hidden cursor-pointer relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="bg-bg text-text-primary px-6 py-3 rounded-full text-sm">View Details</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 relative">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((p, idx) => (
          <ProjectItem key={idx} project={p} onClick={() => setSelectedProject(p)} />
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
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-stroke" />
                  <span className="text-xs text-muted uppercase tracking-[0.3em]">Project Details</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl text-text-primary font-display mb-2">{selectedProject.title}</h3>
                <p className="text-muted mb-6">{selectedProject.description}</p>
                
                {selectedProject.specification && (
                  <div className="mb-8">
                    <h4 className="text-sm text-text-primary font-bold mb-2 uppercase tracking-wider">Specifications</h4>
                    <p className="text-muted text-sm leading-relaxed">{selectedProject.specification}</p>
                  </div>
                )}
                
                {selectedProject.techStack && (
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
                )}
                
                <div className="mt-auto pt-6 border-t border-stroke">
                  {selectedProject.url ? (
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
                  ) : (
                    <div className="text-muted text-sm italic">Website URL not available</div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
