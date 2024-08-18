import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DetailRecipes from "./pages/DetailRecipes.jsx";
import SearchContextProvider from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail-recipes/:id" element={<DetailRecipes />} />
      </Routes>
    </BrowserRouter>
    </SearchContextProvider>
  </StrictMode>
);
