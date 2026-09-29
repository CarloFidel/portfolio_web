import { use } from "react";
import { IMG_PATHS } from "../../constants/assets.constants";
import { MISCELLANEOUS } from "../../constants/miscellaneous.constants";
import { ThemeContext } from "../../contexts/theme/Theme.context";

export const MiscellaneousSection = () => {

  const themeContext = use(ThemeContext)
  const { theme } = themeContext

  return (
    <section className="px-6 py-12">
      <div className="relative w-full md:h-70 lg:h-120">

        {/* Fondo con máscara */}
        <div
          className="absolute inset-0 bg-cover bg-position-[center_20%] mask-x-from-2% mask-t-from-2"
          style={{
            backgroundImage: `url(${theme === "dark"
                ? IMG_PATHS.MISC_IMAGE_WEB
                : IMG_PATHS.MISC_IMAGE_WEB_LIGHT
              })`,
          }}
        />

        {/* Contenido sin máscara */}
        <div className="relative grid grid-cols-2 w-full h-full items-center justify-center">
          {MISCELLANEOUS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 py-6 w-full text-center"
            >
              <h3 className="font-sans text-small uppercase text-muted">
                {item.label}
              </h3>
              <p className="font-extralight">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>)
}
