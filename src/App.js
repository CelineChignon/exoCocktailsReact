
import HomePage from "./pages/HomePage";
import ListAllCocktailsPage from "./pages/ListAllCocktailsPage";
import RandomCocktailPage from "./pages/RandomCocktailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultPage from "./pages/SearchResultPage";
import ShowCocktailPage from "./pages/ShowCocktailPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<RandomCocktailPage />} />
          <Route path="/cocktails" element={<ListAllCocktailsPage />} />
          <Route path="/search-results" element={<SearchResultPage />} />
          <Route path="/cocktails/show/:id" element={<ShowCocktailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
