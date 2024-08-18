import { useEffect } from "react";

const HeroSection = () => {
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
    <>
      <div className="p-7 flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FDA403] to-[#FF7700]">
        <div className="my-10 flex flex-col-reverse sm:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <div className="hero-text flex flex-col gap-2 w-full md:w-1/2 text-center sm:text-left items-center sm:items-start reveal">
          <h1 className="font-bold text-4xl sm:text-3xl md:text-5xl lg:text-6xl">The Ultimate<br/> Cooking Upgrade</h1>
          <p className="text-base lg:text-lg xl:text-xl">Help you find the best recipes for every dish, making cooking easier and more enjoyable.</p>
          <a href="#recipes" className="mt-5 text-slate-50 hover:scale- hover:text-yellow-400 duration-300 w-max px-5 py-3 rounded-lg bg-[#E56C02]">Explore Recipes</a>
        </div>
        <img src="../img/hero.png" className="reveal w-full max-w-96 md:max-w-[500px] sm:w-1/2" alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection;