import { useEffect, useState } from "react";
import { getDetailRecipes, getRecipes } from "../services/recipes.service.js";

export const useRecipes = (search) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes((data) => {
      setRecipes(data);
    }, search);
  }, [search]);

  return recipes;
};

export const useDetailRecipes = (id) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getDetailRecipes((data) => {
      setRecipes(data);
    }, id);
  }, [id]);

  return recipes;
}