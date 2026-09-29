import { SELECTED_WORKS } from "../../constants/data.constants"
import { CustomCard } from "../common/CustomCard"
import { EmblaCarousel } from "./EmblaCarousel"





export const SelectedWorksSection = () => {

  return (
    <section className='w-full justify-center items-center pt-6 flex flex-col gap-6 px-8 mt-12' id="work">
      <div className='flex border-b border-border pb-4 justify-between items-center w-full'>
        <h2 className='font-serif text-4xl md:text-7xl text-title '>
          Selected Works
        </h2>
        <p className='text-muted light:text-shert font-extralight'>
          {SELECTED_WORKS.length} projects
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:hidden gap-6 w-full'>
        {SELECTED_WORKS.map((work, index) => (
          <CustomCard key={index} id={work.id} title={work.title} url={work.img} description={work.description} size="medium" type="vertical" />
        ))}
      </div>
      <div className="hidden lg:block w-full lg:max-w-11/12">
        <EmblaCarousel />
      </div>
    </section>
  )
}
