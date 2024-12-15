import { BrowserRouter, Routes } from "react-router-dom";
import SearchZipcodeRouter from "./modules/search-zipcode/pages/routers";
import newsRouter from "./modules/news/pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {SearchZipcodeRouter}
        {newsRouter}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
