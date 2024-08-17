import { useState, useEffect } from "react";
import BookmarkListModal from "./Bookmarks";

const BookmarkButton = ({openModal}) => {
  const [itemsTotal, setItemsTotal] = useState(0);
  const items = JSON.parse(localStorage.getItem('bookmarks')) || [];

  useEffect(() => {
    setItemsTotal(items.length);
  }, [items]); 

  return (
    <span className="relative">
      <input type="checkbox" id="bookmark-checkbox" className="hidden" />
      <label htmlFor="bookmark-checkbox" className="cursor-pointer rounded-full px-3 py-2 bg-slate-50" onClick={() => openModal()}>
        <i className="text-neutral-800 text-xl fa-regular fa-bookmark"/>
      </label>
      <p className="font-semibold text-neutral-800 bg-yellow-400 px-2 rounded-full absolute -top-3 -right-2">{itemsTotal}</p>
    </span>
  )
}

const Navbar = ({setIsModalOpen}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector("nav.nav-sticky");

      if (header) {
        header.classList.toggle("bg-[#FDA403]", currentScrollPos > 0);
        header.classList.toggle("border-b", currentScrollPos > 0);
        header.classList.toggle("border-[#FF7700]", currentScrollPos > 0);
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); 

  return (
    <nav className={`nav-sticky duration-700 z-10 fixed top-0 left-1/2 transform -translate-x-1/2 flex w-full max-w-[1500px] items-center justify-between p-5 px-5 md:px-10 border-transparent ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}>
      <img src="../img/Logo CS w text.png" className="w-40" alt="" />
      <BookmarkButton openModal={openModal} />
    </nav>
  )
}

export default Navbar;
