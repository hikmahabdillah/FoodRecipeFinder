import { useState } from "react";
import { useDebounce } from "use-debounce";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BookmarkListModal from "./components/Bookmarks";
import RecipesSection from "./components/RecipesSection";

function App() {
  const [search, setSearch] = useState();
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
      <RecipesSection setSearch={setSearch} debounceValue={debounceValue}/>
    </>
  );
}

export default App;
