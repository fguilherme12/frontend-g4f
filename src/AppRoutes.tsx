import { BrowserRouter, Routes } from "react-router-dom";
import zipcodeRouter from "./modules/zipcode/pages/routers";
import newsRouter from "./modules/news/pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {zipcodeRouter}
        {newsRouter}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
