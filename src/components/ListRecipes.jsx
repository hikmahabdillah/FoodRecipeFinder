import { useRecipes } from "../hooks/useRecipes";
import CardRecipes from "./CardRecipes";

const ListRecipes = ({search}) => {
  const { meals = [] } = useRecipes(search);
  console.log(meals);
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {meals.length > 0 &&
          meals.map((meal) => (
            <CardRecipes idMeal={meal.idMeal} mealThumb={meal.strMealThumb} mealCategory={meal.strCategory} mealName={meal.strMeal} mealArea={meal.strArea} mealInstructions={meal.strInstructions}/>
          ))}
      </div>
    </>
  );
};

export default ListRecipes;
