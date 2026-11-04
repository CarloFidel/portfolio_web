import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { POSTERS } from "../constants/data.constants";
import { CustomCard } from "../components/common/CustomCard";
import { motion } from 'motion/react'
import { fadeEfectHero } from "../config/animation/fade.animation.hero";


export const WorkDetail = () => {
  const { projectId } = useParams();
  const project = POSTERS.find((poster) => poster.id === projectId);

  const navigate = useNavigate()

  if (!project) {
    return (
      <section className="mx-auto min-h-[70vh] max-w-7xl px-6 pb-24 pt-32 md:px-10">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm uppercase text-muted transition-colors hover:text-foreground">
          <ArrowLeft size={16} /> Back to selected works
        </Link>
        <h1 className="mt-16 font-serif text-5xl text-title">Project not found</h1>
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center w-full "

    >
      <article className="relative bg-cover w-full h-136 mask-t-from-500" style={{ backgroundImage: `url(${project.img})`, backgroundRepeat: 'none' }}>
        <motion.div
          className="absolute w-full h-full backdrop-blur-md flex justify-center items-center"
          variants={fadeEfectHero(0.8, 0.1)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute z-50 top-20 left-10 flex flex-row items-center gap-2" onClick={() => navigate(-1)}>
            <ArrowLeft size={14} color="#6b6b6b" />
            <p
              className="text-sm text-muted leading-2.5 font-light uppercase transition-colors duration-200 hover:text-foreground">
              VOLVER
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 0.8 }}
          >
            <CustomCard
              id={project.id}
              title={project.title}
              url={project.img}
              size="medium"
              type="vertical"
              border
            />
          </motion.div>

        </motion.div>
      </article>
      <article className="w-full px-8 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h1 className="font-serif text-4xl text-title md:text-7xl">
              {project.title}
            </h1>
            <div className="flex flex-col items-start">
              <p className="text-sm font-serif tracking-wider text-muted">
                Director <span className="ml-2 text-foreground">{project.director}</span>
              </p>
              <p>
                {project.duration}
              </p>

            </div>
          </div>
          <h2 className="mt-8 border-b border-border pb-4 font-serif text-2xl text-title">
            Description
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground">
            {project.largeDescription}
          </p>
        </div>
      </article>
    </section>

  )

}