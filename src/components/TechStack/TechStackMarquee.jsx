import React from 'react';
import './TechStackMarquee.css';

const techs = [
  'NEXT.JS', 'REACT', 'THREE.JS', 'WEBGL', 'WORDPRESS', 'TAILWIND CSS', 'NODE.JS', 'GSAP', 'FRAMER MOTION'
];

const TechStackMarquee = () => {
  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee">
        {/* Render the list twice to create an infinite loop effect */}
        {[...techs, ...techs].map((tech, index) => (
          <div key={index} className="tech-item">
            <span className="tech-dot">•</span>
            <span className="tech-name">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMarquee;
