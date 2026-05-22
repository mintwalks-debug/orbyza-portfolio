import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard3D from './ProjectCard3D';
import { projects } from '../../data/projects';

import { useMediaQuery } from '../../hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const OrbitalRing = () => {
  const ringRef = useRef();
  const autoRotateRef = useRef();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Smooth continuous rotation linked to the entire page scroll
    gsap.to(ringRef.current.rotation, {
      y: Math.PI * 2,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // 1.5 scrub adds a buttery smooth inertia
      }
    });
  }, []);

  // Automatic continuous clear rotation
  useFrame((state, delta) => {
    if (autoRotateRef.current) {
      autoRotateRef.current.rotation.y += delta * 0.15; // Slow cinematic revolution
    }
  });

  const radius = isMobile ? 8 : 13; // Tighter orbit since it's isolated below

  return (
    // Center the ring perfectly at 0,0,0
    <group ref={ringRef} position={[0, 0, 0]}>
      <group ref={autoRotateRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        // Cards face outwards
        const rotationY = angle;

        return (
          <ProjectCard3D 
            key={project.id} 
            project={project} 
            position={[x, 0, z]} 
            rotation={[0, rotationY, 0]} 
          />
        );
      })}
      </group>
    </group>
  );
};

export default OrbitalRing;
