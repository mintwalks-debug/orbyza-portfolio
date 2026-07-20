import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../website dev/NEOFATBURY.co.in.png';
import img2 from '../../website dev/enfermeraentucasa.es.png';
import img3 from '../../website dev/agenziamemorial.png';
import img4 from '../../website dev/eminpasha.com.png';

const projects = [
  { title: "Neofatbury", colSpan: "md:col-span-7", img: img1 },
  { title: "Enfermera en tu casa", colSpan: "md:col-span-5", img: img2 },
  { title: "Agenzia Memorial", colSpan: "md:col-span-5", img: img3 },
  { title: "The Emin Pasha Hotel", colSpan: "md:col-span-7", img: img4 }
];

export function SelectedWorks() {
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
        
      </div>
    </section>
  );
}
