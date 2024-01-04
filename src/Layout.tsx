import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="mt-[--nav-height] min-h-100vh">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default Layout;
