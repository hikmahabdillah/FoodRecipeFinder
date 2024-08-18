import { useContext, useState } from "react";
import { useDebounce } from "use-debounce";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BookmarkListModal from "./components/Bookmarks";
import RecipesSection from "./components/RecipesSection";
import { SearchText } from "./context/SearchContext.jsx";

function App() {
  const { search, setSearch } = useContext(SearchText);
  const [debounceValue] = useDebounce(search, 500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <> 
      <Navbar setIsModalOpen={setIsModalOpen}/>
      <BookmarkListModal isOpen={isModalOpen} onClose={closeModal}/>
      <HeroSection/>
      <RecipesSection search={search} setSearch={setSearch} debounceValue={debounceValue}/>
    </>
  );
}

export default App;
