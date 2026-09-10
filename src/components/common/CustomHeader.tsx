import { use, useState } from "react";
import { MorphIcon, } from "morphicons/react";
import { Globe, Map, Menu, Moon, Sun, X } from "lucide"; // data, not components
import { MobileMenu } from "../ui/MobileMenu";
import { NAV_LINKS } from "../../constants/navigation.constants";
import { IMG_PATHS } from "../../constants/assets.constants";
import { ThemeContext } from "../../contexts/theme/Theme.context";
import { iconsToogleColor } from "../../utility/iconsToogleColor";

export const CustomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langSwitchActive, setlangSwitchActive] = useState(false);

  const themeContext = use(ThemeContext)
  const { theme, setTheme } = themeContext

  const toggleTheme = () => {
    setTheme?.(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xs transition duration-1000`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center font-serif text-title leading-0.5 tracking-tight"
        >
          {
            theme === 'dark' ? (
              <img src={IMG_PATHS.LOGO_BG_BLACK} alt="Carlo Fidel logo" className="w-15 aspect-square object-contain" />
            ) : (
              <img src={IMG_PATHS.LOGO_BG_WHITE} alt="Carlo Fidel logo" className="w-9.5 ml-2.5 aspect-square object-contain opacity-70" />
            )
          }
          <h2 className={`hidden md:block text-3xl text-title ${theme === 'light' ? 'ml-3' : ''}`}>
            Carlo Fidel
          </h2>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted leading-2.5 font-light uppercase transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4">

          <MorphIcon
            icon={langSwitchActive ? Map : Globe}
            size={16} spring={"smooth"}
            strokeWidth={theme === 'dark' ? 1 : 1.5}
            color={iconsToogleColor(theme)}
            onClick={() => setlangSwitchActive(!langSwitchActive)} />
          <MorphIcon
            icon={theme === 'dark' ? Sun : Moon}
            size={18} spring={"smooth"}
            strokeWidth={theme === 'dark' ? 1 : 1.5}
            color={iconsToogleColor(theme)}
            onClick={toggleTheme} />
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <MorphIcon
              icon={menuOpen ? X : Menu}
              size={25} spring={"bouncy"}
              color={iconsToogleColor(theme)}
              strokeWidth={theme === 'dark' ? 1 : 1.5}
            />
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} NAV_LINKS={NAV_LINKS} />
    </div>
  );
};
