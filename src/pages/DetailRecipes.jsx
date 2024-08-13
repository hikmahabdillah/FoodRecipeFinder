import { Link, useParams } from "react-router-dom";
import { useDetailRecipes } from "../hooks/useRecipes";

const DetailRecipes = () => {
  const { id } = useParams();
  const recipes = useDetailRecipes(id);

  if (!recipes || !recipes.meals || recipes.meals.length === 0) {
    return <div>Loading...</div>;
  }

  const meals = recipes.meals[0];
  const instructions = meals.strInstructions
    .split("\r\n")
    .filter((step) => step.includes("."));

  return (
    <>
      <section
        id="detailRecipes"
        className="px-7 sm:px-10 py-12 flex flex-col items-center "
      >
        <header className="text-left mb-8 w-full max-w-5xl flex items-center gap-4 justify-between">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-neutral-800">
            Detail Recipes
          </h1>
        </header>
        <div
          key={meals.idMeal}
          className="flex flex-col lg:flex-row gap-7 p-4 rounded-lg shadow w-full max-w-5xl text-neutral-800 bg-slate-50 "
        >
          <img
            src={meals.strMealThumb}
            alt={meals.strMeal}
            className="object-cover object-center h-full max-h-[34rem] w-full lg:w-1/2 rounded-md mb-2"
          />
          <div className="lg:w-1/2 relative">
            <h2 className="text-4xl font-bold">{meals.strMeal}</h2>
            <span className="px-4 py-1 text-neutral-800 font-semibold rounded-md absolute top-0 right-0 bg-yellow-400">
              {meals.strCategory}
            </span>
            <p className="text-gray-500 font-semibold mb-3"> {meals.strArea}</p>
            <p className="font-bold text-neutral-800 text-xl mb-2">
              Ingredients :
            </p>
            <ul className="ml-4 font-medium text-neutral-800 list-disc mb-5">
              {recipes.meals.length > 0 &&
                recipes.meals.map((meal) => {
                  return Object.keys(meal).map((key, index) => {
                    const ingredient = meal[`strIngredient${index + 1}`];
                    return ingredient && <li key={key}>{ingredient}</li>;
                  });
                })}
            </ul>
            <p className="mb-4 font-bold text-neutral-800 text-xl">
              Instructions:
            </p>
            <ul className="text-neutral-600 font-medium mb-3">
              {instructions.map((instruction, index) => (
                <li key={index} className="mb-1">
                  {index + 1}. {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 mt-8 text-nowrap"
        >
          <i className="mr-3 fa-solid fa-arrow-left" />
          Back to Home
        </Link>
      </section>
    </>
  );
};

export default DetailRecipes;
