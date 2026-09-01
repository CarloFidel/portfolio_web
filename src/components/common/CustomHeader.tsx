import { useState } from "react";
import { NAV_LINKS } from "../../constants/constants";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide"; // data, not components

export const CustomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        borderColor: "var(--color-border)",
        background: "rgba(12,12,12,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-title text-foreground leading-0.5 tracking-tight "
        >
          Carlo Fidel
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted leading-2.5 font-light tracking-widest uppercase transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <MorphIcon icon={menuOpen ? X : Menu} size={25} spring={"bouncy"} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background border border-border">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-sm text-muted font-light tracking-widest uppercase  border-b border-border leading-2.5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
