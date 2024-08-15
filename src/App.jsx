import { useState } from "react";
import InputSearch from "./components/InputSearch";
import ListRecipes from "./components/ListRecipes";
import { useDebounce } from "use-debounce";
import HeroSection from "./components/HeroSection";

function App() {
  const [search, setSearch] = useState();
  const [debounceValue] = useDebounce(search, 500);
  return (
    <>
      <HeroSection/>
      <section id="recipes" className="p-5">
      <div className="text-center mt-5 text-neutral-800">
        <h1 className="text-4xl font-bold">Food Recipe Finder</h1>
        <p className="motto">
          Discover Your Next Favorite Dish, One Recipe at a Time
        </p>
      </div>
      <InputSearch setSearch={setSearch}/>
      <ListRecipes search={debounceValue}/>
      </section>
    </>
  );
}

export default App;
