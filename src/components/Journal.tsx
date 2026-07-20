import { motion } from 'framer-motion';

const journals = [
  { title: "Website Development", date: "Different categories", readTime: "Service", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop" },
  { title: "SEO", date: "Different categories", readTime: "Service", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { title: "Meta & Google Ads", date: "Performance marketing", readTime: "Service", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=200&auto=format&fit=crop" }
];

export function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              Our <span className="font-display italic">Expertise</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-sm">
              Comprehensive digital solutions to help your business grow.
            </p>
          </div>
          
          <button className="hidden md:inline-flex group relative rounded-full overflow-hidden mt-6 md:mt-0">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-sm px-6 py-3 border border-stroke bg-bg text-text-primary rounded-full flex items-center gap-2">
              View all <span>→</span>
            </div>
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {journals.map((journal, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-colors duration-300 group"
            >
              <img 
                src={journal.img} 
                alt={journal.title} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl text-text-primary mb-2 font-display">{journal.title}</h3>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-muted">
                  <span>{journal.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{journal.readTime}</span>
                </div>
              </div>
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-stroke items-center justify-center text-muted group-hover:bg-text-primary group-hover:text-bg group-hover:border-transparent transition-all duration-300">
                ↗
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
