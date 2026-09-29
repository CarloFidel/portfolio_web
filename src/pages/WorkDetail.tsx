import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { POSTERS } from "../constants/data.constants";
import { CustomCard } from "../components/common/CustomCard";
import { motion } from 'motion/react'
import { fadeEfectHero } from "../config/animation/fade.animation.hero";


export const WorkDetail = () => {
  const { projectId } = useParams();
  const project = POSTERS.find((poster) => poster.id === projectId);

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
      <article className="relative bg-cover w-full h-136 mask-t-from-500 " style={{ backgroundImage: `url(${project.img})`, backgroundRepeat: 'none' }}>
        <motion.div
          className="absolute w-full h-full backdrop-blur-md flex justify-center items-center"
          variants={fadeEfectHero(0.8, 0.1)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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
      <article className=" w-full px-8">

        <div className='flex border-b border-border pb-4 w-full'>
          <h2 className='font-serif text-4xl md:text-7xl text-title bg-red-500 w-full'>
            Description
          </h2>

        </div>


      </article>
    </section>

  )

}