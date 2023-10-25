import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/templates/footer-admin/footer";
import HeaderLoginAdmin from "../components/templates/header-admin copy/header";

const RootLoginAdmin = () => {
  return (
    <>
      <HeaderLoginAdmin />
      <Outlet />
      <FooterAdmin />
    </>
  );
};

export default RootLoginAdmin;
