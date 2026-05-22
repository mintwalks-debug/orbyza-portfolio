import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 3000 }) => {
  const meshRef = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50 - 10;
      const factor = Math.random();
      const speed = 0.01 + Math.random() / 200;
      temp.push({ x, y, z, factor, speed });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    // Mouse parallax effect
    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);
    
    particles.forEach((particle, i) => {
      let { x, y, z, factor, speed } = particle;
      
      // Floating animation
      const t = factor + state.clock.elapsedTime * speed;
      
      // Parallax based on z-depth
      const zDepth = (z + 60) / 60; // 0 to 1 mostly
      const parallaxX = mouseX * zDepth * 2;
      const parallaxY = mouseY * zDepth * 2;
      
      dummy.position.set(
        x + Math.sin(t) * 2 + parallaxX,
        y + Math.cos(t) * 2 + parallaxY,
        z
      );
      
      const scale = 0.1 + factor * 0.1;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </instancedMesh>
  );
};

export default ParticleField;
