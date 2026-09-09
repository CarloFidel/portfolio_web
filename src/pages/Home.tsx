import { CustomForm } from "../components/common/CustomForm";
import { StatsSection } from "../components/ui/StatsSection";
import { IMG_PATHS } from "../constants/assets.constants";


const Home = () => {
  return (
    <>
      <section className="pt-10 pb-24 px-6 md:px-10 max-w-6xl mx-auto" >
        <div className="border-b border-border pb-12 mb-12">
          <div className='flex flex-row gap-4 items-center justify-between'>
            <div className='flex flex-col gap-6 max-w-2/3'>
              <p className="text-xs text-muted leading-loose tracking-widest uppercase mb-8 font-light">
                Film Composer — Music Producer
              </p>
              <h1 className="font-serif text-5xl text-foreground md:text-7xl lg:text-8xl leading-none mb-8">
                Music that lives<br />
                <em>inside the silence.</em>
              </h1>

            </div>
            <div className='hidden bg-cover w-full h-200 scale-90 md:block mask-b-from-2 mask-t-from-60% mask-r-from-1.5 mask-l-from-40' style={{ backgroundImage: `url(${IMG_PATHS.HERO_IMAGE})` }}></div>


          </div>

        </div>
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

      </section>
      <StatsSection />
      <section className="flex flex-row py-10 px-6 md:px-10 max-w-6xl mx-auto" >
        <CustomForm className="w-full" />
        <div className='hidden bg-cover w-full h-200 scale-90 md:block mask-b-from-2 mask-t-from-60% mask-r-from-1.5 mask-l-from-40' style={{ backgroundImage: `url(${IMG_PATHS.HERO_IMAGE})` }}></div>
      </section>

    </>

  );
};

export default Home;
