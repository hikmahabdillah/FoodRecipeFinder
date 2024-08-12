import { useState } from "react";
import InputSearch from "./components/InputSearch";
import ListRecipes from "./components/ListRecipes";

function App() {
  const [search, setSearch] = useState();
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Food Recipe Finder</h1>
        <p className="motto">
          Discover Your Next Favorite Dish, One Recipe at a Time
        </p>
      </div>
      <InputSearch search={setSearch}/>
      <ListRecipes search={search}/>
    </>
  );
}

export default App;
