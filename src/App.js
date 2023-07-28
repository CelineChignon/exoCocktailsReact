
import HomePage from "./pages/HomePage";
import ListAllCocktailsPage from "./pages/ListAllCocktailsPage";
import RandomCocktailPage from "./pages/RandomCocktailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<RandomCocktailPage />} />
          <Route path="/cocktails" element={<ListAllCocktailsPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
