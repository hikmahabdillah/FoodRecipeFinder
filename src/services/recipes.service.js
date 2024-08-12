import axios from "axios";

// get api
export const getRecipes = async (callback, search) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search || ''}`);
    return callback(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
