import { Route } from "react-router-dom";
import SearchZipCodePage from "./search-zipcode/SearchZipCodePage";

const SearchZipcode = [
  <Route path="/search-zipcode" element={<SearchZipCodePage />}></Route>,
];

export default SearchZipcode;
