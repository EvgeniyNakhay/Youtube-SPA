import Authorization from "./pages/Authorization/Authorization";
import Favourites from "./pages/Favourites/Favourites";
import MainPage from "./pages/MainPage/MainPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
