import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

export default function LayoutIndex() {
  return (
    <>
      <div className="ra-admin-layout">
        <Menu />
        <div className="right">
          <Header />
          <Outlet />
          <Footer/>
        </div>
      </div>
    </>
  );
}