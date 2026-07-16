import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const testimonials = [
  {
    quote: "With very little guidance team delivered designs that were consistently spot on...",
    author: "Marcus Anderson",
    role: "CEO",
    company: "Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Viktor led the creation of our best fundraising deck to date!...",
    author: "alexwu",
    role: "Founder",
    company: "Nexgate",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Working with Viktor transformed our product vision...",
    author: "James Mitchell",
    role: "VP Product",
    company: "LaunchPad",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The design quality exceeded our expectations...",
    author: "Rachel Foster",
    role: "Co-founder",
    company: "Nexus Labs",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Incredible work from start to finish...",
    author: "David Zhang",
    role: "Head of Design",
    company: "Paradigm Labs",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

// Tripled for infinite scroll effect
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Card width logic: 427.5px on desktop, (full width - 48px) on mobile
  const getCardWidth = () => {
    if (typeof window === 'undefined') return 427.5;
    return window.innerWidth < 768 ? window.innerWidth - 48 : 427.5;
  };
  const cardGap = 24;

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Infinite loop trick
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-20 overflow-hidden">
      <div className="px-6 md:max-w-4xl md:ml-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          What <span className="font-serif">builders</span> say
        </h2>
        <div 
          className={`flex items-center gap-2 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="font-medium">Clutch 5/5</span>
        </div>
      </div>

      <div 
        className={`relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex px-6 transition-transform"
          ref={containerRef}
          style={{ 
            transform: `translateX(calc(-${currentIndex * (getCardWidth() + cardGap)}px))`,
            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            gap: `${cardGap}px`
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex flex-col justify-between"
              style={{ width: `${getCardWidth()}px`, minHeight: '300px' }}
            >
              <div>
                <svg className="w-8 h-8 text-[#0D212C] mb-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base text-[#0D212C] leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0D212C]">{t.author}</h4>
                  <p className="text-sm text-[#0D212C]/70">↳ {t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0D212C]/20 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#0D212C]" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0D212C]/20 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-[#0D212C]" />
          </button>
        </div>
      </div>
      
      {/* Desktop navigation buttons could be positioned absolutely if desired, but requirements specify they exist, maybe below or overlay */}
      <div className="hidden md:flex items-center justify-end max-w-[1200px] mx-auto px-6 mt-8 gap-4">
        <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0D212C]/20 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-[#0D212C]" />
        </button>
        <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0D212C]/20 hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-6 h-6 text-[#0D212C]" />
        </button>
      </div>
    </section>
  );
}
