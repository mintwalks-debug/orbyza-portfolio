import { useInViewAnimation } from '../hooks/useInViewAnimation';
import img1 from '../../website dev/NEOFATBURY.co.in.png';
import img2 from '../../website dev/eminpasha.com.png';
import img3 from '../../website dev/enfermeraentucasa.es.png';
import img4 from '../../website dev/agenziamemorial.png';
import img5 from '../../website dev/askdogtrainers.png';
import img6 from '../../website dev/ashcircelassociates.com.png';
import img7 from '../../website dev/Voxeldata.com.au.png';
import img8 from '../../website dev/kumarprinter.com.png';
import img12 from '../../website dev/ivybridge.png';
import img22 from '../../website dev/farm-to-fork-bliss.png';

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: "Neofatbury",
    description: "Next.js + React.js + Vue + Vercel + Sanity CMS + Zoho CRM + Godaddy + custom theme (Hyderabad client)",
    image: img1,
    url: "https://neofatbury.co.in/"
  },
  {
    title: "Emin Pasha",
    description: "Wordpress + Wp Bakery + elementor + Booking plugin (Luxury Hotel Website) Africa",
    image: img2,
    url: "https://eminpasha.com/"
  },
  {
    title: "Enfermera en tu casa",
    description: "Next.js + React.js + Vue + Vercel + Godaddy + Sanity CMS + wix redirection + SEO",
    image: img3,
    url: "https://enfermeraentucasa.es/"
  },
  {
    title: "Agenzia Memorial",
    description: "Wordpress + elementor",
    image: img4,
    url: "https://www.agenziamemorial.com/"
  },
  {
    title: "Ask Dog Trainers",
    description: "Improved the indexing from 126 to 2350 + SEO",
    image: img5,
    url: "https://askdogtrainers.com/"
  },
  {
    title: "Ash Circle Associates",
    description: "Made the correction on wordpress website + SEO",
    image: img6,
    url: "https://ashcircleassociates.com/"
  },
  {
    title: "Voxel Data",
    description: "Wordpress + elementor + Basic SEO",
    image: img7,
    url: "https://voxeldata.com.au/"
  },
  {
    title: "Kumar Printer",
    description: "Next.js + React.js + Vue + Vercel",
    image: img8,
    url: "https://www.kumarprinter.com/"
  },
  {
    title: "Callgirl4u",
    description: "Next.js + React.js + SEO + Vercel",
    image: "/screenshots/project3.jpg",
    url: "https://callgirl4u.com/"
  },
  {
    title: "Kokasite",
    description: "Next.js + Vercel + SEO",
    image: "/screenshots/project5.jpg",
    url: "https://kokasite.com/"
  },
  {
    title: "Diksha Wellness Builder",
    description: "Next.js + React.js + Vue + SEO + Vercel",
    image: "/screenshots/project7.jpg",
    url: "https://diksha-wellness-builder.vercel.app/"
  },
  {
    title: "Ivy Bridge Study",
    description: "React + JS + Vercel (Mr. Satyaprakash from Thailand)",
    image: img12,
    url: "https://ivybridgestudy.com/"
  },
  {
    title: "Dr. Faus Home Clinic",
    description: "Elementor + Btheme + Woo commerce + Direct Bank Integration",
    image: "/screenshots/project10.jpg",
    url: "https://drfaushomeclinic.net/"
  },
  {
    title: "Nails by Abel",
    description: "Trial website for the nails salon on Bootstrap",
    image: "/screenshots/project2.jpg",
    url: "https://nails-by-abel.vercel.app/"
  },
  {
    title: "Pramod Plumber Services",
    description: "Html + CSS + JS + Vercel",
    image: "/screenshots/project1.jpg",
    url: "https://pramod-plumber-services.vercel.app/"
  },
  {
    title: "Bake in Town Jaipur",
    description: "Trial website for a bakery that sells inhouse made cakes on next.js + react.js",
    image: "/screenshots/project9.jpg",
    url: "https://bake-in-town-jaipur.vercel.app/"
  },
  {
    title: "Skin Camouflage",
    description: "Trial website for the skin care clinic HTML + CSS + JS",
    image: "/screenshots/skincamouflage.jpg",
    url: "https://skincamouflage.vercel.app/"
  },
  {
    title: "Takoma Park MD Real Estate",
    description: "Dummy wordpress website project for US with elementor wpo contact form targeting takomamaryland",
    image: "/screenshots/takomapark.jpg",
    url: "https://takomaparkmdrealestate.com/"
  },
  {
    title: "Crocs",
    description: "Trial website for a project with react.js + tailwinds + vercel + mongodb for admin panel",
    image: "/screenshots/crocs.jpg",
    url: "https://crocs-rust.vercel.app/"
  },
  {
    title: "Nova Spotify Clone",
    description: "Inhouse music player webapp on react + vercel",
    image: "/screenshots/novaspotify.jpg",
    url: "https://nova-spotify-clone.vercel.app/"
  },
  {
    title: "Property Lords BBSE",
    description: "Trial website for real estate on react + vercel",
    image: "/screenshots/project11.jpg",
    url: "https://propertylordsbbse.vercel.app/"
  },
  {
    title: "Farm to Fork Bliss",
    description: "Website for client on react + react router + Lucide font + Radix UI + shadcn/ui + tailwinds",
    image: img22,
    url: "https://farm-to-fork-bliss.vercel.app/"
  }
];

function ProjectItem({ project }: { project: Project }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: '0.1s' }}
    >
      <div className="ml-20 md:ml-28">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block group cursor-pointer">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {project.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lg ml-1">↗</span>
            </h3>
          </a>
        ) : (
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2">
            {project.title}
          </h3>
        )}
        <p className="text-sm md:text-base text-muted">{project.description}</p>
      </div>
      
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl shadow-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </a>
      ) : (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((p, idx) => (
          <ProjectItem key={idx} project={p} />
        ))}
      </div>
    </section>
  );
}
