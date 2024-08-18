import { useEffect } from "react";
import InputSearch from "./InputSearch";
import ListRecipes from "./ListRecipes";

const RecipesSection = ({setSearch, debounceValue}) => {
  useEffect(() => {
    window.ScrollReveal().reveal('.reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
    });
  }, []);

  return (
    <section id="recipes" className="p-5">
      <div className="text-center mt-5 text-neutral-800 reveal">
        <h1 className="text-4xl font-bold">Food Recipe Finder</h1>
        <p className="motto">
          Discover Your Next Favorite Dish, One Recipe at a Time
        </p>
      </div>
      <InputSearch setSearch={setSearch}/>
      <ListRecipes search={debounceValue}/>
    </section>
  )
}

export default RecipesSection;