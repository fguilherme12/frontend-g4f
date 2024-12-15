import { BrowserRouter, Routes } from "react-router-dom";
import SearchZipcode from "./modules/search-zipcode/pages/routers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {SearchZipcode}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
