import { Outlet } from "react-router-dom";
import FooterAdmin from "../components/templates/footer-admin/footer";
import HeaderAdmin from "../components/templates/header-admin/header";

const RootAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </>
  );
};

export default RootAdmin;
