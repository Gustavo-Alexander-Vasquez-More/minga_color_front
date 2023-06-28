export default function Footer() {
  return (
    <footer className="w-full h-[27vh] flex flex-col justify-around items-center lg:h-[50vh] md:h-[40vh] sm:py-[1rem] ">
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
      <button id="boton-footer" className="flex justify-center items-center rounded-[50px] bg-[#6d42e4] h-[2.5rem] w-[50%] sm:w-[30%] ">Donate<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
  </svg> </button>
    </footer>
  );
}
