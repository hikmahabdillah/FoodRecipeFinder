import { Link } from "react-router-dom";

const CardRecipes = ({
  idMeal,
  mealThumb,
  mealCategory,
  mealName,
  mealArea,
  mealInstructions,
}) => {
  return (
    <div className="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="relative">
        <img
          className="rounded-t-lg max-w-lg w-full object-cover object-top h-64"
          src={mealThumb}
          alt={mealName}
          loading="lazy"
        />
        <span className="px-4 py-1 text-neutral-800 rounded-md absolute top-3 left-3 bg-yellow-400">
          {mealCategory}
        </span>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {mealName}
          </h5>
          <p className="mb-3 font-medium text-gray-400">{mealArea}</p>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis line-clamp-3">
          {mealInstructions}
        </p>
        <Link
          to={`/detail-recipes/${idMeal}`}
          className="inline-flex text-neutral-800 items-center px-3 py-2 text-sm font-medium text-center hover:text-white bg-yellow-400 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
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
        </Link>
      </div>
    </div>
  );
};

export default CardRecipes;
