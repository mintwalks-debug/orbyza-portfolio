export function Stats() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "95+", label: "Projects Done" },
    { value: "200%", label: "Satisfied Clients" }
  ];

  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-stroke">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-8 md:pt-0 md:px-12 flex flex-col items-center md:items-start justify-center">
              <span className="text-5xl md:text-6xl lg:text-7xl font-display text-text-primary mb-4">{stat.value}</span>
              <span className="text-sm text-muted uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
