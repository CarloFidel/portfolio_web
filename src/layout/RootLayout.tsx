import { Outlet as Pages } from "react-router";
import { CustomHeader } from "../components/common/CustomHeader";

const RootLayout = () => {
  return (
    <>
      <header>
        <CustomHeader />
      </header>
      <main>
        <Pages />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default RootLayout;
