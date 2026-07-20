import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../website dev/NEOFATBURY.co.in.png';
import img2 from '../../website dev/Roamandroar.co.in.png';
import img3 from '../../website dev/Voxeldata.com.au.png';
import img4 from '../../website dev/agenziamemorial.png';
import img5 from '../../website dev/ashcircelassociates.com.png';
import img6 from '../../website dev/askdogtrainers.png';
import img7 from '../../website dev/eminpasha.com.png';
import img8 from '../../website dev/enfermeraentucasa.es.png';
import img9 from '../../website dev/farm-to-fork-bliss.png';
import img10 from '../../website dev/ivybridge.png';
import img11 from '../../website dev/kumarprinter.com.png';

const explorations = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(col1Ref.current, {
        y: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(col2Ref.current, {
        y: "-80%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="absolute inset-0 h-screen z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary mb-6 drop-shadow-2xl">
          Visual <span className="font-display italic">playground</span>
        </h2>
        
        <p className="text-muted text-sm md:text-base max-w-sm mx-auto mb-8 bg-bg/50 backdrop-blur-sm p-4 rounded-2xl">
          A collection of experiments, unused concepts, and visual studies exploring typography, motion, and form.
        </p>

        <button className="pointer-events-auto group relative rounded-full overflow-hidden">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative text-sm px-6 py-3 border border-stroke bg-surface backdrop-blur-md text-text-primary rounded-full flex items-center gap-2 hover:bg-bg transition-colors">
            Follow on Dribbble <span>↗</span>
          </div>
        </button>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full grid grid-cols-2 gap-12 md:gap-40 px-6 pt-[100vh]">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-12 md:gap-32 items-end pt-32">
            {explorations.slice(0, Math.ceil(explorations.length / 2)).map((img, idx) => (
              <div 
                key={`col1-${idx}`} 
                className="pointer-events-auto aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer bg-surface"
                style={{ transform: `rotate(${idx % 2 === 0 ? '-6deg' : '3deg'})` }}
              >
                <img src={img} alt="Exploration" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-12 md:gap-32 items-start mt-48">
            {explorations.slice(Math.ceil(explorations.length / 2)).map((img, idx) => (
              <div 
                key={`col2-${idx}`} 
                className="pointer-events-auto aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer bg-surface"
                style={{ transform: `rotate(${idx % 2 === 0 ? '5deg' : '-4deg'})` }}
              >
                <img src={img} alt="Exploration" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
