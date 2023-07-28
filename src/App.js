
import HomePage from "./pages/HomePage";
import ListAllCocktailsPage from "./pages/ListAllCocktailsPage";
import RandomCocktailPage from "./pages/RandomCocktailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<RandomCocktailPage />} />
          <Route path="/cocktails" element={<ListAllCocktailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
