import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "evr",
    description: "From idea to millions raised for a web3 AI product",
    image: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
  },
  {
    title: "Automation Machines",
    description: "Streamlining industrial automation processes",
    image: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"
  },
  {
    title: "xPortfolio",
    description: "Modern portfolio management platform",
    image: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
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
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24] mb-2">{project.title}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full rounded-2xl shadow-lg object-cover"
      />
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
