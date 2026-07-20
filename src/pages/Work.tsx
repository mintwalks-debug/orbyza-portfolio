import { Navbar } from '../components/Navbar';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactFooter } from '../components/ContactFooter';

export function Work() {
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-bg min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            All <span className="font-display italic">Works</span>
          </h1>
          <p className="text-muted text-sm md:text-base max-w-sm mb-12">
            A comprehensive list of projects and explorations.
          </p>
        </div>
        <ProjectsSection />
      </div>
      <ContactFooter />
    </>
  );
}
