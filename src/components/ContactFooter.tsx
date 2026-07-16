import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

export function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HLS logic
    const video = videoRef.current;
    if (!video) return;

    const source = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({ startPosition: -1 });
      hls.loadSource(source);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log("Play failed", e));
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log("Play failed", e));
      });
    }
  }, []);

  useEffect(() => {
    // GSAP Marquee
    if (!marqueeRef.current) return;
    
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }, []);

  const marqueeText = Array(10).fill("BUILDING THE FUTURE • ").join("");

  return (
    <footer id="resume" className="relative w-full bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 scale-y-[-1]">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* GSAP Marquee */}
        <div className="w-full overflow-hidden mb-16 whitespace-nowrap">
          <div ref={marqueeRef} className="inline-block text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary/20 tracking-tighter">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-24">
          <a href="mailto:hello@michaelsmith.com" className="group relative rounded-full overflow-hidden inline-flex">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-lg md:text-2xl px-10 py-5 bg-surface text-text-primary rounded-full backdrop-blur-md flex items-center gap-3">
              hello@michaelsmith.com <span>↗</span>
            </div>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-sm px-4 py-2 rounded-full border border-stroke text-sm text-text-primary">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for projects
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-text-primary transition-colors">Dribbble</a>
            <a href="#" className="hover:text-text-primary transition-colors">GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
