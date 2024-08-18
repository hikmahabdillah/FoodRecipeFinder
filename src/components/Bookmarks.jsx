import { useState, useEffect } from "react";
import { useDetailRecipes } from "../hooks/useRecipes";
import { Link } from "react-router-dom";

const BookmarkListModal = ({ isOpen, onClose }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const items = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(items);    
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setBookmarks([]);
      setIsLoading(true);
    }
  }, [isOpen]);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        <h2 className="text-neutral-800 text-2xl font-bold mb-4">
          Bookmark List
        </h2>
        <div className="h-full max-h-80 overflow-auto">
        {isLoading ? (
          <p className="text-neutral-800 font-semibold text-center">Loading...</p>
        ) : (
          bookmarks.length > 0 ? (
            bookmarks.map((id) => <RecipeDetail key={id} id={id} />)
          ) : (
            <p className="text-gray-600">No bookmarks found.</p>
          )
        )}
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const RecipeDetail = ({ id }) => {
  const recipeDetail = useDetailRecipes(id);

  if (!recipeDetail || !recipeDetail.meals) return null;
  return (
    <Link
      to={`/detail-recipes/${recipeDetail.meals[0].idMeal}`}
      className="flex items-center gap-3 mb-3 p-3 rounded-xl shadow-lg border border-gray-200 duration-500 hover:scale-95"
    >
      <img
        src={recipeDetail.meals[0].strMealThumb}
        alt={recipeDetail.meals[0].strMeal}
        className="size-16 rounded-full object-cover"
      />
      <span className="text-neutral-800 [&>p]:leading-tight">
        <p className="text-xl font-semibold">{recipeDetail.meals[0].strMeal}</p>
        <p className="text-gray-500 text-base font-medium">
          {recipeDetail.meals[0].strCategory}
        </p>
      </span>
    </Link>
  );
};

export default BookmarkListModal;
