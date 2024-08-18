import { useEffect } from "react";
import useBookmark from "../hooks/useBookmarks";
import { useRecipes } from "../hooks/useRecipes";
import CardRecipes from "./CardRecipes";
import SkeletonCard from "./SkeletonCard";

const ListRecipes = ({search}) => {
  const { meals = [] } = useRecipes(search);
  const { bookmarkedItems, toggleBookmark } = useBookmark();
  useEffect(() => {
    window.ScrollReveal().reveal('.reveal', {
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
    });
  }, []);

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
