import React from 'react';
import TechStackMarquee from '../TechStack/TechStackMarquee';

const HeroSection = () => {
  return (
    <section id="hero" style={{ height: '100vh', pointerEvents: 'none', position: 'relative' }}>
      {/* 3D content is mostly handled in Canvas. 
          We can place HTML overlays here if needed. */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        pointerEvents: 'auto'
      }}>
        <div style={{ opacity: 0.8, marginBottom: '20px', letterSpacing: '2px' }}>
          We don't build websites. We build worlds.
        </div>
        <button 
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '12px 24px',
            borderRadius: '999px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#6C00FF';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(108, 0, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Explore Our Work ↓
        </button>
      </div>

      <TechStackMarquee />
    </section>
  );
};

export default HeroSection;
