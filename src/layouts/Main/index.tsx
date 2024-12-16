import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import './index.css';

export const MainLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="outlet-main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
