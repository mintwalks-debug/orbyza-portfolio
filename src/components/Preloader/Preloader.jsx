import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const { progress, active, total, loaded } = useProgress();
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const isFinished = progress === 100 || (total > 0 && loaded === total);
    
    if (isFinished && !hasCompleted) {
      setHasCompleted(true);
      
      const tl = gsap.timeline({ onComplete: onComplete });
      tl.to('.preloader-text', {
        opacity: 0, y: -20, duration: 0.5, stagger: 0.1, ease: 'power2.inOut', delay: 0.5
      })
      .to('.preloader-container', {
        y: '-100%', duration: 0.8, ease: 'power4.inOut'
      });
    }
  }, [progress, total, loaded, hasCompleted, onComplete]);

  // Fallback: Force completion after 3.5 seconds if WebGL loading gets stuck
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!hasCompleted) {
        setHasCompleted(true);
        const tl = gsap.timeline({ onComplete: onComplete });
        tl.to('.preloader-text', { opacity: 0, duration: 0.5 })
          .to('.preloader-container', { y: '-100%', duration: 0.8, ease: 'power4.inOut' });
      }
    }, 3500);
    return () => clearTimeout(fallback);
  }, [hasCompleted, onComplete]);

  return (
    <div 
      className="preloader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#05050a',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'var(--font-heading)'
      }}
    >
      <div style={{ display: 'flex', gap: '5px', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
        {['O', 'R', 'B', 'Y', 'Z', 'A'].map((letter, i) => (
          <span key={i} className="preloader-text" style={{ display: 'inline-block' }}>
            {letter}
          </span>
        ))}
      </div>
      <div 
        className="progress-bar-bg"
        style={{
          width: '200px',
          height: '2px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          className="progress-bar-fill"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: '#6C00FF',
            width: `${progress}%`,
            transition: 'width 0.3s ease-out'
          }}
        />
      </div>
      <div style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.6 }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Preloader;
