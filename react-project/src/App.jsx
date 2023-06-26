export default function App() {
  return (
    <div id="BODY" >
    <header className=" bg-[url('/bg-mobile.png')] w-full h-screen bg-cover md:h-screen lg:bg-[url('/bg-desktop.png')] lg:h-[65vh]">
      <nav className="w-full h-[15vh] flex items-center justify-between px-[2rem]">
      <svg class="w-6 h-6 text-[#5b34c5] dark:text-white md:text-[#FFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
  </svg>
        <img className="w-[3.5rem]  " src="/logo.png" alt="logo" />
      </nav>
      <div className="w-full h-[85vh] flex flex-col items-center justify-center md:flex md:flex-col md:h-[55vh] gap-8">
        <div className="w-[90%] h-[12vh] md:h-[4rem]" id="TITULO" >
          <h1 className="text-[#FFF] text-[2.3rem] text-center font-roboto font-bold ">Your favorite comic book store</h1>
        </div>
        <div className="md:h-[2rem] md:w-[70%] md:text-center md:text-[1.2rem] md:text-[#FFF] hidden md:block lg:w-[40%] lg:h-[4rem]">Explore our catalog to live the adventure of your life</div>
        <button id="buton-web" className="hidden lg:block lg:bg-[#5b34c5] lg:w-[15%] lg:h-[2.5rem] lg:text-[#FFF] lg:mb-[12rem] lg:rounded-[10px] font-bold font-roboto ">Let´s go!</button>
        <div id="texto-mobile" className="w-[90%] text-center h-[13vh] flex items-center md:hidden">
          <p className="text-[#FFF] text-[0.9rem]" >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
        </div>
        <div id="buton-mobile" className="md:hidden bg-[#5b34c5] w-[80%] h-[6.5vh] flex justify-center items-center text-[#FFF] text-[1.5rem] rounded-[50px] mb-[4rem]">Started</div>
      </div>
    </header>
    <main className="hidden lg:block lg:h-[35vh] lg:w-[100%] lg:flex justify-center items-center">
      <div  id="bg-container-main" className="hidden md:block bg-[#5b34c5] md:w-[90%] lg-w-[90%] xl-w-[95%] md:h-[24vh] md:flex rounded-[15px] " >
        <div id="seccion-izquierda" className="w-[50%] h-[24vh] md:flex md:items-center justify-around">
        <div className="w-[30%] h-[24vh] flex justify-start items-center px-[0.7rem]">
        <svg className="lg:bg-[#FFF] lg:h-[1.5rem] lg:w-[1.5rem] rounded-[15px] p-[5px] lg:ml-[1rem]"  width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M10.25 5.25C10.25 5.00147 10.0465 4.8 9.79545 4.8L1.80192 4.8L5.11687 1.5182C5.29438 1.34246 5.29438 1.05754 5.11687 0.881802C4.93936 0.706066 4.65155 0.706066 4.47404 0.881802L0.383134 4.9318C0.205624 5.10754 0.205624 5.39246 0.383134 5.5682L4.47404 9.6182C4.65155 9.79393 4.93936 9.79393 5.11687 9.6182C5.29438 9.44246 5.29438 9.15754 5.11687 8.9818L1.80192 5.7L9.79545 5.7C10.0465 5.7 10.25 5.49853 10.25 5.25Z" fill="#333333"/>
</svg>  
        </div>
        
<img className="lg:h-[12rem] lg:w-[10rem] lg:mb-[3rem] lg:mr-[4.5rem] xl:h-[13rem] xl:w-[10rem]" src="/izuko.png" alt="" />
<img className="md:h-[11rem] lg:w-[7rem] md:mb-[3rem] lg:mr-[4rem] xl:w-[9rem] xl:h-[11rem]" src="/banner-home.png" alt="" />
        </div>
        <div id="secccion-derecha" className=" w-[50%] h-[24vh] md:flex md:justify-start md:items-center">
        <div id="texto-sec-derecha" className="md:flex md:flex-col text-[#FFF] lg:w-[65%]">
          <h2>Shonen</h2>
          <p className="text-[0.8rem]">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
        </div>
        <div id="sec-flecha-derecha" className="w-[35%] h-[24vh] flex justify-end items-center lg:px-[2rem]">
        <svg className="md:bg-[#FFF] md:h-[1.5rem] md:w-[1.5rem] rounded-[15px] p-[5px]" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M0.25 5.25C0.25 5.00147 0.453507 4.8 0.704545 4.8L8.69808 4.8L5.38313 1.5182C5.20562 1.34246 5.20562 1.05754 5.38313 0.881802C5.56064 0.706066 5.84845 0.706066 6.02596 0.881802L10.1169 4.9318C10.2944 5.10754 10.2944 5.39246 10.1169 5.5682L6.02596 9.6182C5.84845 9.79393 5.56064 9.79393 5.38313 9.6182C5.20562 9.44246 5.20562 9.15754 5.38313 8.9818L8.69808 5.7L0.704545 5.7C0.453507 5.7 0.25 5.49853 0.25 5.25Z" fill="#333333"/>
</svg>

        </div>
        </div>
      </div>
    </main>
    <footer className="w-full h-[27vh] flex flex-col justify-around items-center lg:h-[50vh] md:h-[40vh] ">
      <img className="lg:h-[9rem] lg:w-full hidden lg:block rounded-b-[150px]" src="./footer.png" alt="" />
      <div className="flex w-full h-[5vh] text-[1.3rem] justify-around px-[5rem]">
        <h2>Home</h2>
        <h2>Mangas</h2>
      </div>
      <div className="flex justify-center">
      <img src="/Logo (2).png" alt="logo-footer"  className="w-[5.3rem]"/>
      <img src="/INGA.png" alt=""  className="w-[5.3rem] border-[5px] border-[#5f36d1]"/>  
      </div>
      <div id="REDES" className="flex gap-4">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
  </svg>
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
  </svg>
  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9879 4.85527C23.8835 7.22196 22.2494 10.4572 19.0969 14.5624C15.8344 18.8551 13.07 21 10.8107 21C9.4137 21 8.22975 19.695 7.26312 17.0765C6.61541 14.674 5.97193 12.2716 5.32563 9.87626C4.60595 7.2563 3.83547 5.94703 3.01137 5.94703C2.83215 5.94703 2.20702 6.32908 1.12891 7.09461L0 5.61936C1.18253 4.56766 2.34813 3.51166 3.49821 2.45852C5.07304 1.07628 6.25698 0.350823 7.04722 0.274986C8.90992 0.0918324 10.0586 1.38393 10.4918 4.14698C10.9532 7.13038 11.2778 8.98482 11.457 9.71171C11.9961 12.1843 12.5859 13.4177 13.2322 13.4177C13.7332 13.4177 14.4867 12.6193 15.4915 11.021C16.4962 9.41981 17.031 8.20355 17.1044 7.36505C17.2483 5.98281 16.7107 5.29598 15.4915 5.29598C14.9171 5.29598 14.3245 5.41904 13.7163 5.6766C14.9016 1.78601 17.1594 -0.105631 20.4954 0.00454819C22.9663 0.0746616 24.1333 1.69443 23.9879 4.85527" fill="#222222"/>
</svg>
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd"/>
  </svg>
      </div>
      <div id="boton-footer" className="flex justify-center items-center rounded-[50px] bg-[#6d42e4] h-[2.5rem] w-[50%]">Donate<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
  </svg> </div>
    </footer>
    </div>
  );
}
