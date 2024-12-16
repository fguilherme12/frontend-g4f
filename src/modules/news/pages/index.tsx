import { Route } from "react-router-dom";
import NewsPage from "./news/NewsPage";
import { MainLayout } from "../../../layouts/Main";

const newsRouter = [
    <Route key='layout' element={<MainLayout />}>
        <Route path="/news" element={<NewsPage />}> </Route>
    </Route>

];

export default newsRouter;
