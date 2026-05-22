import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectOverlay = ({ project, onClose }) => {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          boxSizing: 'border-box'
        }}
      >
        {/* Dark blur backdrop */}
        <div 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(5, 8, 22, 0.85)',
            backdropFilter: 'blur(15px)',
            cursor: 'pointer'
          }}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="glass-panel"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'row',
            gap: '3rem',
            padding: '3rem',
            overflowY: 'auto',
            border: `1px solid ${project.color}40`, // 40 is hex alpha for 25%
            boxShadow: `0 0 40px ${project.color}20`
          }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            ×
          </button>

          {/* Left Column: Image */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: `0 20px 40px rgba(0,0,0,0.5)`,
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src={project.image} 
                alt={project.name} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: project.color,
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 'bold',
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: 'auto',
                transition: 'transform 0.2s ease, filter 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.filter = 'brightness(1.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.filter = 'brightness(1)';
              }}
            >
              Visit Live Website ↗
            </a>
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  textAlign: 'center',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              >
                View Source on GitHub
              </a>
            )}
          </div>

          {/* Right Column: Details */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem', paddingRight: '1rem' }}>
            <div>
              <span style={{ 
                color: project.color, 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {project.category}
              </span>
              <h2 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem 0', lineHeight: 1.1 }}>
                {project.name}
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                Technology Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack?.map((tech, i) => (
                  <span 
                    key={i}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: '#fff'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                Performance metrics
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: `4px solid ${project.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  boxShadow: `0 0 15px ${project.color}40`
                }}>
                  {project.speed?.split('/')[0] || 99}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                  Lighthouse Performance Score<br/>
                  Perfectly optimized core web vitals
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                Architecture & Specifications
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                {project.specification}
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectOverlay;
