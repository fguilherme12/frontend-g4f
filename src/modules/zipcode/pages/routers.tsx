import { Route } from "react-router-dom";
import SearchZipCodePage from "./search-zipcode/SearchZipCodePage";
import { MainLayout } from "../../../layouts/Main";

const zipcodeRouter = [
  <Route key='layout' element={<MainLayout />}>
    <Route path="/" element={<SearchZipCodePage />}></Route>,
  </Route>

];

export default zipcodeRouter;
