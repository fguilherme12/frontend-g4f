import { Route } from "react-router-dom";
import SearchZipCodePage from "./search-zipcode/SearchZipCodePage";

const SearchZipcodeRouter = [
  <Route path="/search-zipcode" element={<SearchZipCodePage />}></Route>,
];

export default SearchZipcodeRouter;
