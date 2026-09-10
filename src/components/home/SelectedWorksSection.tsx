import { SELECTED_WORKS } from "../../constants/data.constants"
import { CustomCard } from "../common/CustomCard"

export const SelectedWorksSection = () => {
  return (
    <section className='w-full justify-center items-center pt-6 flex flex-col gap-6 px-8 mt-12'>
      <div className='flex border-b border-border pb-4 justify-between items-center w-full'>
        <h2 className='font-serif text-3xl '>
          Selected Works
        </h2>
        <p className='text-muted light:text-shert font-extralight'>
          {SELECTED_WORKS.length} projects
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
        {SELECTED_WORKS.map((work, index) => (
          <CustomCard key={index} title={work.title} url={work.img} />
        ))}
      </div>
    </section>
  )
}
