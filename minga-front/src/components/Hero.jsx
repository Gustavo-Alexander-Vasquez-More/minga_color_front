import Button from "./Button";
export default function Hero() {
  return (
    <div className="w-full h-[85vh] flex flex-col items-center justify-center md:flex md:flex-col md:h-[55vh] gap-8">
    <div className="w-[90%] h-[12vh] md:h-[4rem] lg:flex lg:justify-center" id="TITULO" >
      <h1 className="text-[#FFF] text-[2rem] text-center font-roboto font-bold sm:text-[2.3rem] lg:w-[70%] lg:flex lg:justify-center lg:items-center">Your favorite comic book store<p className="hidden lg:block lg:w-[2rem] lg:h-[2.2rem] lg:text-[1.5rem]">✨</p></h1>
    </div>
    <div className="md:h-[2rem] md:w-[70%] md:text-center md:text-[1.2rem] md:text-[#FFF] hidden lg:w-[40%] lg:h-[4rem] lg:block">Explore our catalog to live the adventure of your life </div>
<Button title='Let´s go!'/>
    
    <div id="texto-mobile" className="w-[90%] text-center h-[13vh] flex items-center md:w-[60%]  ">
      <p className="  text-[#FFF] text-[0.9rem] sm:text-[1.1rem] lg:hidden " >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
    </div>
    <button id="buton-mobile" className=" lg:hidden bg-[#5b34c5] w-[80%] h-[6.5vh] flex justify-center items-center text-[#FFF] text-[1.5rem] rounded-[50px] mb-[4rem] sm:w-[50%]">Started</button>
  </div>
  );
}