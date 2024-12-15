import { BrowserRouter, Routes } from "react-router-dom";
<<<<<<< HEAD
import zipcodeRouter from "./modules/zipcode/pages/routers";
=======
import SearchZipcodeRouter from "./modules/search-zipcode/pages/routers";
>>>>>>> 966319be1fa87d1d8de33d10cdd2f3483c788f81
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
