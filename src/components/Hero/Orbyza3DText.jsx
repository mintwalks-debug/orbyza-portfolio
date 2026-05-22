import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const Orbyza3DText = () => {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      // Smoothly transition the emissive color over time through the color spectrum
      const hue = (state.clock.elapsedTime * 0.1) % 1;
      materialRef.current.emissive.setHSL(hue, 0.8, 0.5);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Floating subtle animation for the logo */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <Center>
          <Text3D 
            font="/fonts/ClashDisplay.json" 
            size={1.2} 
            height={0.15} 
            curveSegments={32}
            bevelEnabled 
            bevelSize={0.02} 
            bevelThickness={0.05} 
            bevelSegments={8}
          >
            ORBYZA
            {/* Premium Glossy Metallic Material */}
            <meshStandardMaterial 
              ref={materialRef}
              color="#ffffff" 
              metalness={0.9} 
              roughness={0.1} 
              emissiveIntensity={0.4}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
};

export default Orbyza3DText;
