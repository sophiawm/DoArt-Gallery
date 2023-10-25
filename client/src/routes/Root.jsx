import { Outlet } from "react-router-dom";
import Footer from "../components/templates/footer-user/footer";
import Header from "../components/templates/header-user/header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
