import { Routes, Route } from "react-router";

import "./style.css";

import PrivateRoute from "./hoc/PrivateRoutes/PrivateRoute";
import Authorization from "./pages/Authorization/Authorization";
import Favourites from "./pages/Favourites/Favourites";
import MainPage from "./pages/MainPage/MainPage";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route className="container" element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
