import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="base-container plain-border">
      <Header className="header" />
      <div className="content">
        <Outlet />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default MainLayout;
