import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function TestimonialSection() {
  const { ref: sectionRef, isInView } = useInViewAnimation({ threshold: 0.1 });
  const [offset, setOffset] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      animationFrameId = requestAnimationFrame(() => {
        if (!imageRef.current) return;
        
        const rect = imageRef.current.getBoundingClientRect();
        // Calculate relative position of image to viewport
        const viewportHeight = window.innerHeight;
        
        // If image is in viewport or close to it
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Simple parallax: scroll offset mapped to -100 to 100
          const scrollProgress = 1 - (rect.top / viewportHeight);
          // Max offset 200px as requested
          const parallaxOffset = (scrollProgress - 0.5) * 200;
          setOffset(parallaxOffset);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once initially
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-12 px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      <div 
        className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-slate-900 mx-auto" />
      </div>
      
      <h2 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        'I left <span className="font-serif">Apple</span> to build the studio I always wanted to work with'
      </h2>
      
      <p 
        className={`italic text-sm text-[#273C46] mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Viktor Oddy
      </p>
      
      <div 
        className={`flex items-center justify-center gap-8 md:gap-12 mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <span className="font-medium text-slate-900 text-[24px]" style={{ width: '80px' }}>Apple</span>
        <span className="font-medium text-slate-900 text-[24px]" style={{ width: '83px' }}>IDEO</span>
        <span className="font-medium text-slate-900 text-[24px]" style={{ width: '110px' }}>Polygon</span>
      </div>
      
      <div 
        className={`relative w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg h-[400px] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <img 
          ref={imageRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" 
          alt="Chris Halaska" 
          className="absolute inset-0 w-full h-[150%] object-cover object-center"
          style={{ 
            transform: `translateY(${offset}px)`,
            willChange: 'transform'
          }}
        />
      </div>
    </section>
  );
}
