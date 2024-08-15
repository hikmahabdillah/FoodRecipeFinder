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
        className="py-5 md:py-12 flex flex-col items-center px-5"
      >
        <div
          key={meals.idMeal}
          className="flex flex-col md:flex-row gap-1 md:gap-7 p-4 rounded-lg shadow w-full max-w-5xl text-neutral-800 bg-slate-50"
        >   
            <div className="relative">
            <img
              src={meals.strMealThumb}
              alt={meals.strMeal}
              className="relative object-cover object-center h-full md:h-[34rem] max-h-[34rem] w-full rounded-md mb-2"
            />
            <span className="z-10 absolute top-5 right-5">
              <input type="checkbox" id="bookmark-checkbox" className="hidden" />
            <label
              htmlFor="bookmark-checkbox"
              className="cursor-pointer rounded-full px-3 py-2 bg-slate-50"
            >
              <i className="text-neutral-800 text-xl fa-regular fa-bookmark" />
            </label>
            </span>
            </div>
          <div className="md:w-1/2 md:py-5 relative h-full max-h-[34rem] overflow-auto">
            <h2 className="text-4xl font-bold">{meals.strMeal}</h2>
            <span className="px-4 py-1 text-neutral-800 font-semibold rounded-md absolute top-5 right-5 bg-yellow-400">
              {meals.strCategory}
            </span>
            <p className="text-gray-500 font-semibold mb-3"> {meals.strArea}</p>
            <iframe
              title={meals.strMeal}
              className="mb-3 w-full h-64 max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
              src={`https://www.youtube.com/embed/${
                meals.strYoutube.split("v=")[1]
              }`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="text-gray-500 font-medium mb-3">
              Source :{" "}
              <a
                className="italic font-normal hover:text-yellow-600 duration-500"
                target="_blank"
                rel="noreferrer"
                href={meals.strSource}
              >
                {meals.strSource}
              </a>
            </p>
            <p className="font-bold text-neutral-800 text-xl mb-2">
              Ingredients :
            </p>
            <ul className="ml-5 font-medium text-neutral-800 list-disc mb-5">
              {recipes.meals.length > 0 &&
                recipes.meals.map((meal) => {
                  return Object.keys(meal).map((key, index) => {
                    const ingredient = meal[`strIngredient${index + 1}`];
                    const measure = meal[`strMeasure${index + 1}`];
                    return (
                      ingredient && (
                        <li key={key}>
                          {measure} {ingredient}
                        </li>
                      )
                    );
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
