import { useRecipes } from "../hooks/useRecipes";

const ListRecipes = ({search}) => {
  const { meals = [] } = useRecipes(search);
  console.log(meals);
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {meals.length > 0 &&
          meals.map((meal) => (
            <div
              className="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={meal.idMeal}
            >
              <a href="#" className="relative">
                <img
                  className="rounded-t-lg max-w-lg w-full object-cover object-top h-64"
                  src={meal.strMealThumb}
                  alt=""
                />
                <span className="px-4 py-1 text-neutral-800 rounded-md absolute top-3 left-3 bg-yellow-400">{meal.strCategory}</span>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {meal.strMeal}
                  </h5>
                    <p className="mb-3 font-medium text-gray-400">
                        {meal.strArea}
                    </p>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis line-clamp-3">
                  {meal.strInstructions}
                </p>
                <a
                  href="#"
                  className="inline-flex text-neutral-800 items-center px-3 py-2 text-sm font-medium text-center hover:text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListRecipes;
