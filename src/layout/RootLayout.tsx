import { Outlet as Pages } from "react-router";
import { CustomHeader } from "../components/common/CustomHeader";
import { CustomFooter } from "../components/common/CustomFooter";
import { use } from "react";
import { ThemeContext } from "../contexts/theme/Theme.context";

const RootLayout = () => {

  const themeContext = use(ThemeContext)
  const { theme } = themeContext

  return (
    <>
      <header data-theme={theme}>
        <CustomHeader />
      </header>
      <main data-theme={theme} className="bg-background transition-discrete duration-200">
        <Pages />
      </main>
      <footer data-theme={theme} className="bg-background transition-discrete duration-200">
        <CustomFooter />
      </footer>
    </>
  );
};

export default RootLayout;
