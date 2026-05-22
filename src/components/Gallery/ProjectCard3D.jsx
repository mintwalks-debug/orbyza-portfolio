import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard3D = ({ project, position, rotation }) => {
  const groupRef = useRef();
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(project.image);
  
  useFrame((state, delta) => {
    if (groupRef.current && cardRef.current) {
      // Gentle levitation on hover
      const targetY = hovered ? 0.5 : 0;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
      
      // Dynamic depth scaling: cards scale up when they rotate to the front (positive Z)
      const worldPosition = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPosition);
      
      // New ring radius is ~13. Z goes from -13 (back) to +13 (front)
      // Normalize Z to a 0 to 1 range
      const normalizedZ = (worldPosition.z + 13) / 26; 
      // Base scale 0.7 at back, 1.2 at front
      const targetScale = 0.7 + (Math.max(0, Math.min(1, normalizedZ)) * 0.5);
      
      // If hovered and in front, scale up even more
      const finalScale = hovered ? targetScale * 1.1 : targetScale;
      
      cardRef.current.scale.setScalar(
        THREE.MathUtils.lerp(cardRef.current.scale.x, finalScale, 0.1)
      );
    }
  });

  return (
    <group 
      position={position} 
      rotation={rotation}
      ref={groupRef}
    >
      <group
        ref={cardRef}
        onClick={(e) => {
          e.stopPropagation();
          // Dispatch custom event to open the new premium HTML overlay
          window.dispatchEvent(new CustomEvent('open-project', { detail: project }));
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'none';
        }}
      >
        {/* Premium Rounded Card */}
        <RoundedBox args={[4.2, 2.7, 0.1]} radius={0.15} smoothness={4}>
          <meshStandardMaterial 
            map={texture} 
            metalness={0.6} 
            roughness={0.2}
            emissive={new THREE.Color(project.color)}
            emissiveIntensity={hovered ? 0.4 : 0.1}
          />
        </RoundedBox>
        
        {/* Ambient Glow behind the card */}
        {hovered && (
          <mesh position={[0, 0, -0.2]}>
            <planeGeometry args={[4.7, 3.2]} />
            <meshBasicMaterial color={project.color} transparent opacity={0.4} />
          </mesh>
        )}
      </group>
    </group>
  );
};

export default ProjectCard3D;
