import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector("nav.nav-sticky");

      if (header) {
        header.classList.toggle("bg-[#FDA403]", window.scrollY > 0);
        header.classList.toggle("border-b", window.scrollY > 0);
        header.classList.toggle("border-[#FF7700]", window.scrollY > 0);
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={`nav-sticky duration-700 z-10 bg-transparent fixed top-0 left-1/2 transform -translate-x-1/2 flex w-full max-w-[1500px] items-center justify-between p-5 px-10 border-transparent ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}>
      <img src="../img/Logo CS w text.png" className="w-40" alt="" />
      <input type="checkbox" id="bookmark-checkbox" className="hidden" />
      <label htmlFor="bookmark-checkbox" className="cursor-pointer rounded-full px-3 py-2 bg-slate-50">
        <i className="text-neutral-800 text-xl fa-regular fa-bookmark"/>
      </label>
    </nav>
  )
}

export default Navbar;