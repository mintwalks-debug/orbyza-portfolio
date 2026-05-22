import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    
    // Smooth, slow aurora movement
    float t = time * 0.15;
    vec2 pos = p;
    
    for(float i = 1.0; i < 4.0; i++) {
        pos.x += 0.3 / i * sin(i * 3.0 * pos.y + t);
        pos.y += 0.3 / i * cos(i * 3.0 * pos.x + t);
    }
    
    float r = cos(pos.x + pos.y + 1.0) * 0.5 + 0.5;
    float g = sin(pos.x + pos.y + 1.0) * 0.5 + 0.5;
    float b = (sin(pos.x + t) + cos(pos.y + t)) * 0.25 + 0.5;
    
    // Premium Colors
    vec3 baseColor = vec3(0.02, 0.03, 0.09);    // #050816
    vec3 color1 = vec3(0.49, 0.23, 0.93);       // #7C3AED
    vec3 color2 = vec3(0.12, 0.11, 0.29);       // #1E1B4B
    vec3 color3 = vec3(0.93, 0.28, 0.60);       // #EC4899
    
    vec3 finalColor = mix(color1, color2, r);
    finalColor = mix(finalColor, color3, g * b);
    
    // Blend with dark navy base
    finalColor = mix(baseColor, finalColor, 0.35);
    
    // Add volumetric center glow (radial gradient)
    float dist = length(p);
    float glow = smoothstep(1.5, 0.0, dist);
    vec3 glowColor = mix(vec3(0.49, 0.23, 0.93), vec3(0.93, 0.28, 0.60), g); // Mix purple and pink
    finalColor += glowColor * glow * 0.4;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const AuroraBackground = () => {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 0, -50]}>
      <planeGeometry args={[200, 200]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
        depthWrite={false}
      />
    </mesh>
  );
};

export default AuroraBackground;
