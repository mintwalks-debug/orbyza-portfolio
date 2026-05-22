import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const textRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    // Text Reveal Animation
    const lines = textRef.current.querySelectorAll('.reveal-line');
    gsap.fromTo(lines, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 60%',
        }
      }
    );

    // Stat Counters Animation
    countersRef.current.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
        },
        onUpdate: function() {
          let current = Math.floor(this.targets()[0].val);
          if (counter.getAttribute('data-suffix')) {
             counter.innerText = current + counter.getAttribute('data-suffix');
          } else {
             counter.innerText = current;
          }
        }
      });
    });
  }, []);

  return (
    <section id="about" style={{ display: 'flex', flexDirection: 'row', width: '100vw', minHeight: '100vh', padding: '10vw' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} ref={textRef}>
        <h2 className="reveal-line" style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
          Who We Are
        </h2>
        <p className="reveal-line" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '600px' }}>
          Orbyza is a web design studio obsessed with one thing — creating digital experiences that people never forget. We're not here to make average websites. We craft immersive, high-performance digital worlds that make your brand unforgettable.
        </p>
        <p className="reveal-line" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '600px' }}>
          From bold startups to established businesses, we've built across industries — education, real estate, travel, beauty, e-commerce, and beyond. Every pixel is intentional. Every interaction is designed to impress.
        </p>
        <p className="reveal-line" style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', fontWeight: 'bold' }}>
          We build the internet of tomorrow — today.
        </p>
        
        <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
          <div>
            <div 
              ref={el => countersRef.current[0] = el} 
              data-target="11" 
              data-suffix="+"
              style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}
            >0</div>
            <div style={{ color: 'var(--color-text-secondary)' }}>Projects Delivered</div>
          </div>
          <div>
            <div 
              ref={el => countersRef.current[1] = el} 
              data-target="100" 
              data-suffix="%"
              style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}
            >0</div>
            <div style={{ color: 'var(--color-text-secondary)' }}>Client Satisfaction</div>
          </div>
        </div>
      </div>
      {/* Right side is intentionally empty to let the 3D rotating shape be visible */}
      <div style={{ flex: 1, pointerEvents: 'none' }}></div>
    </section>
  );
};

export default AboutSection;
