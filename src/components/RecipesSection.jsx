import { useEffect } from "react";
import InputSearch from "./InputSearch";
import ListRecipes from "./ListRecipes";

const RecipesSection = ({setSearch, debounceValue}) => {
  useEffect(() => {
    window.ScrollReveal().reveal('.reveal', {
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset:true,
      interval: 200,
    });
  }, []);

  return (
    <section id="recipes" className="p-5 relative">
      <img src="../img/chicken.png" className="hidden lg:block w-full max-w-[245px] reveal absolute -top-3 left-0" alt="" />
      <img src="../img/groceries.png" className="hidden lg:block w-full max-w-[280px] reveal absolute -top-32 right-0" alt="" />
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