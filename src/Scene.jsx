import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerformanceMonitor, AdaptiveDpr, Preload } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from './hooks/useMediaQuery';
import { EffectComposer, Vignette, Bloom } from '@react-three/postprocessing';

import AuroraBackground from './components/Hero/AuroraBackground';
import ParticleField from './components/Hero/ParticleField';
import Orbyza3DText from './components/Hero/Orbyza3DText';
import OrbitalRing from './components/Gallery/OrbitalRing';

gsap.registerPlugin(ScrollTrigger);

const SceneContent = ({ degraded }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const sceneGroup = useRef();

  // Premium mouse parallax tilt on the entire scene
  useFrame((state) => {
    if (sceneGroup.current) {
      // Subtle tilt
      const targetX = (state.pointer.x * Math.PI) / 15;
      const targetY = (state.pointer.y * Math.PI) / 15;
      
      sceneGroup.current.rotation.y = THREE.MathUtils.lerp(sceneGroup.current.rotation.y, targetX, 0.05);
      sceneGroup.current.rotation.x = THREE.MathUtils.lerp(sceneGroup.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <>
      {/* Global Backgrounds */}
      <AuroraBackground />
      {!degraded && <ParticleField count={isMobile ? 800 : 2500} />}
      
      {/* Premium Lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[0, 0, 5]} intensity={2.0} color="#EC4899" distance={20} />
      <pointLight position={[-5, 5, -5]} intensity={1.5} color="#7C3AED" distance={20} />
      <pointLight position={[5, -5, -5]} intensity={1.5} color="#312E81" distance={20} />
      
      <group ref={sceneGroup}>
        {/* Top: 3D Logo */}
        <group position={[0, 5, 0]}>
          <Orbyza3DText />
        </group>
        
        {/* Bottom: Orbital Gallery */}
        <group position={[0, -3, 0]} rotation={[0.15, 0, 0]}>
          <OrbitalRing />
        </group>
      </group>

      {/* Cinematic Post-Processing */}
      {!degraded && (
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.2} />
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>
      )}
    </>
  );
};

const Scene = () => {
  const [degraded, setDegraded] = useState(false);

  return (
    <>
      <PerformanceMonitor
        onDecline={() => setDegraded(true)}
        onIncline={() => setDegraded(false)}
      />
      <AdaptiveDpr pixelated />
      <Preload all />
      
      <SceneContent degraded={degraded} />
    </>
  );
};

export default Scene;
