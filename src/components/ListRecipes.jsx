import { useRecipes } from "../hooks/useRecipes";
import CardRecipes from "./CardRecipes";
import SkeletonCard from "./SkeletonCard";
import { useState, useEffect } from "react";

const ListRecipes = ({search}) => {
  const { meals = [] } = useRecipes(search);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedItems(savedBookmarks);
  }, []);

  const toggleBookmark = (itemId) => {
    let updatedBookmarks;

    if (bookmarkedItems.includes(itemId)) {
        // Jika item sudah di-bookmark, hapus dari bookmark
        updatedBookmarks = bookmarkedItems.filter(id => id !== itemId);
    } else {
        // Jika item belum di-bookmark, tambahkan ke bookmark
        updatedBookmarks = [...bookmarkedItems, itemId];
    }

    // Simpan daftar bookmark yang diperbarui ke local storage
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarkedItems(updatedBookmarks);
  };

  if (meals.length === 0) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {meals.length > 0 &&
          meals.map((meal) => (
            <CardRecipes key={meal.idMeal} idMeal={meal.idMeal} mealThumb={meal.strMealThumb} mealCategory={meal.strCategory} mealName={meal.strMeal} mealArea={meal.strArea} mealInstructions={meal.strInstructions} toggleBookmark={toggleBookmark} bookmarkedItems={bookmarkedItems}/>
          ))}
      </div>
    </>
  );
};

export default ListRecipes;
