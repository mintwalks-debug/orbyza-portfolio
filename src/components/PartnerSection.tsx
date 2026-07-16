import { useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

const GIF_URLS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

interface TrailImage {
  id: number;
  x: number;
  y: number;
  url: string;
  rotation: number;
  timestamp: number;
}

export function PartnerSection() {
  const { ref, isInView } = useInViewAnimation();
  const [trails, setTrails] = useState<TrailImage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);
  const trailIdCounter = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const cleanup = () => {
      const now = Date.now();
      setTrails(prev => prev.filter(t => now - t.timestamp < 1000));
      animationFrameId = requestAnimationFrame(cleanup);
    };

    animationFrameId = requestAnimationFrame(cleanup);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return; // 80ms minimum spawn rate

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomGif = GIF_URLS[Math.floor(Math.random() * GIF_URLS.length)];
    const randomRotation = Math.random() * 20 - 10; // -10 to +10 deg

    const newTrail: TrailImage = {
      id: trailIdCounter.current++,
      x,
      y,
      url: randomGif,
      rotation: randomRotation,
      timestamp: now
    };

    setTrails(prev => [...prev, newTrail]);
    lastSpawnTime.current = now;
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-12 px-6">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative overflow-hidden w-full max-w-7xl mx-auto bg-white py-48 rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center cursor-default ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 z-10 pointer-events-none">
          Partner with us
        </h2>
        
        <div className="z-10">
          <Button variant="primary" href="https://halaskastudio.com/book" className="gap-3 !px-2 !pr-6">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100" 
              alt="Viktor"
              className="w-10 h-10 rounded-full object-cover"
            />
            Start chat with Viktor
          </Button>
        </div>

        {/* Trail Images */}
        {trails.map(trail => {
          const age = Date.now() - trail.timestamp;
          const progress = Math.min(age / 1000, 1);
          // scale from 1 down to 0, opacity from 1 down to 0
          const scale = 1 - progress * 0.5;
          const opacity = 1 - Math.pow(progress, 2);

          return (
            <img
              key={trail.id}
              src={trail.url}
              className="absolute pointer-events-none rounded-xl shadow-lg object-cover"
              style={{
                width: '160px',
                height: '100px',
                left: trail.x - 80, // center on cursor
                top: trail.y - 50,
                transform: `scale(${scale}) rotate(${trail.rotation}deg)`,
                opacity: opacity,
                transition: 'transform 0.1s linear, opacity 0.1s linear' // small transition to smooth out frame drops
              }}
              alt=""
            />
          );
        })}
      </div>
    </section>
  );
}
