import { useEffect, useState } from 'react';

const links = ["Home", "Work", "Resume"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        
        {/* Logo */}
        <div className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform overflow-hidden">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">JA</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-1" />

        {/* Links */}
        <div className="flex items-center">
          {links.map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                i === 0 
                ? 'text-text-primary bg-stroke/50' 
                : 'text-muted hover:text-text-primary hover:bg-stroke/50'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* CTA Button */}
        <button className="relative text-xs sm:text-sm rounded-full group">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 text-text-primary">
            Say hi <span>↗</span>
          </div>
        </button>

      </div>
    </nav>
  );
}
