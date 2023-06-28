import Hero from "./Hero";

export default function NavBar() {
  return (
    <header className=" bg-[url('/bg-mobile.png')] w-full h-screen bg-cover md:h-screen lg:bg-[url('/bg-desktop.png')] lg:h-[65vh]">
      <nav className="w-full h-[15vh] flex items-center justify-between px-[2rem]">
      <button><svg class="w-6 h-6 text-[#5b34c5] dark:text-white md:text-[#FFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
  </svg></button>
        <img className="w-[3.5rem]  " src="/logo.png" alt="logo" />
      </nav>
      <Hero/>
    </header>
  );
}
