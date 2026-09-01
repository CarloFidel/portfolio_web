
const Home = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="border-b border-border pb-12 mb-12">
        <p className="text-xs text-muted leading-loose tracking-widest uppercase mb-8 font-light">
          Film Composer — Music Producer
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
          Music that lives<br />
          <em>inside the silence.</em>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-base md:text-lg font-light leading-relaxed max-w-lg" style={{ color: "var(--color-muted)" }}>
            Orchestral and electronic scores for film, documentary, and interactive media.
            Collaborating with directors across Europe and beyond since 2015.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light transition-colors duration-200 self-start md:self-auto"
            style={{ color: "var(--color-accent)", letterSpacing: "0.15em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
          >
            View Work
            <span className="inline-block w-8 h-px" style={{ background: "currentColor" }} />
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-0">
        {[
          { value: "40+", label: "Films Scored" },
          { value: "12", label: "Awards" },
          { value: "9 yrs", label: "Experience" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="py-6 pr-8"
            style={{ borderRight: i < 2 ? "1px solid var(--color-border)" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}
          >
            <p className="font-serif text-3xl md:text-4xl mb-1" style={{ color: "var(--color-foreground)" }}>{stat.value}</p>
            <p className="text-xs tracking-widest uppercase font-light" style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
