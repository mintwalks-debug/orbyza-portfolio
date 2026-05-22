import React from 'react';

const Footer = () => {
  const triggerMiniHero = () => {
    // We will fire a custom event that Scene.jsx listens to,
    // or we can use a global state store. Custom event is simple.
    window.dispatchEvent(new CustomEvent('trigger-easter-egg'));
  };

  return (
    <footer style={{
      width: '100vw',
      padding: '4rem 10%',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      zIndex: 10,
      background: '#020205'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 
            onClick={triggerMiniHero}
            style={{ 
              fontSize: '3rem', 
              color: '#fff', 
              cursor: 'none', // using custom cursor
              textShadow: '0 0 10px rgba(255,255,255,0.5)',
              display: 'inline-block'
            }}
          >
            ORBYZA
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
            Crafting Digital Worlds, One Pixel at a Time.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Studio</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>About Us</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>+91 93520 47100</li>
              <li>+91 72970 16879</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Follow</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Behance</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '4rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'var(--color-text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>© 2025 Orbyza. All rights reserved.</p>
        <p>Built by Orbyza.</p>
      </div>
    </footer>
  );
};

export default Footer;
