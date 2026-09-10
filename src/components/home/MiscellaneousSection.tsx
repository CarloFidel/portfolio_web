import { MISCELLANEOUS } from "../../constants/miscellaneous.constants";

export const MiscellaneousSection = () => {
  return (
    <section className="px-6 py-12 ">
      <div className='border-y grid grid-cols-2 border-border'>
        {
          MISCELLANEOUS.map((item, index) => (
            <div key={index} className={`flex flex-col gap-2 py-6 w-full text-center `}>
              <h3 className='font-sans text-small uppercase text-muted'>{item.label}</h3>
              <p className='font-extralight'>{item.value}</p>
            </div>
          ))
        }

      </div>

    </section>
  )
}
