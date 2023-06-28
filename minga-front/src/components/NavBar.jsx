// NavBar.jsx
import { useState } from "react";
import Hero from "./Hero";
import Display from "./Display";

export default function NavBar() {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <header className="bg-[url('/bg-mobile.png')] w-full h-screen bg-cover md:h-screen lg:bg-[url('/bg-desktop.png')] lg:h-[65vh]">
      <div
        className={`absolute lg:w-[30%] h-[100vh] left-0 bg-[#5b34c5] z-10 px-[2rem] py-[2rem] text-[#FFF] transition-all duration-300 ${
          display ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <Display show={display} setShow={setDisplay} />
      </div>
      <nav className="w-full h-[15vh] flex items-center justify-between px-[2rem] relative">
        <button onClick={toggleDisplay}>
          <svg
            className="w-6 h-6 text-[#5b34c5] dark:text-white md:text-[#FFF]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
        </button>
        <img className="w-[3.5rem]" src="/logo.png" alt="logo" />
      </nav>
      <Hero />
    </header>
  );
}