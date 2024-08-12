import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipes.service.js";

export const useRecipes = (search) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes((data) => {
      setRecipes(data);
    }, search);
  }, [search]);

  return recipes;
};
