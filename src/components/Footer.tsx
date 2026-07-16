import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-shrink-0">
          <Button href="https://halaskastudio.com/book" variant="primary">Start a chat</Button>
        </div>
        
        <div className="flex gap-16 w-full md:w-auto md:justify-end">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Services</a>
            <a href="#work" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Work</a>
            <a href="#about" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">About</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity flex items-center gap-1">
              x.com <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
