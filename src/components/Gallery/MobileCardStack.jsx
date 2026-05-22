import React from 'react';
import { projects } from '../../data/projects';

const MobileCardStack = () => {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 10, position: 'relative' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Our Work</h2>
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="glass-panel" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            overflow: 'hidden',
            borderTop: \`4px solid \${project.color}\`
          }}
        >
          <img 
            src={project.image} 
            alt={project.name} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <div style={{ padding: '1.5rem' }}>
            <span style={{ color: project.color, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{project.name}</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {project.description}
            </p>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--border-radius-btn)',
                fontSize: '0.9rem'
              }}
            >
              Visit Site →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCardStack;
