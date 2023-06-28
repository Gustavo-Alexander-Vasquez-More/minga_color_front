import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./Arrow";

let icon_left = "M10.25 5.25C10.25 5.00147 10.0465 4.8 9.79545 4.8L1.80192 4.8L5.11687 1.5182C5.29438 1.34246 5.29438 1.05754 5.11687 0.881802C4.93936 0.706066 4.65155 0.706066 4.47404 0.881802L0.383134 4.9318C0.205624 5.10754 0.205624 5.39246 0.383134 5.5682L4.47404 9.6182C4.65155 9.79393 4.93936 9.79393 5.11687 9.6182C5.29438 9.44246 5.29438 9.15754 5.11687 8.9818L1.80192 5.7L9.79545 5.7C10.0465 5.7 10.25 5.49853 10.25 5.25Z"; // Tu definición del icono a la izquierda
let icon_right = "M0.25 5.25C0.25 5.00147 0.453507 4.8 0.704545 4.8L8.69808 4.8L5.38313 1.5182C5.20562 1.34246 5.20562 1.05754 5.38313 0.881802C5.56064 0.706066 5.84845 0.706066 6.02596 0.881802L10.1169 4.9318C10.2944 5.10754 10.2944 5.39246 10.1169 5.5682L6.02596 9.6182C5.84845 9.79393 5.56064 9.79393 5.38313 9.6182C5.20562 9.44246 5.20562 9.15754 5.38313 8.9818L8.69808 5.7L0.704545 5.7C0.453507 5.7 0.25 5.49853 0.25 5.25Z"; // Tu definición del icono a la derecha

export default function Carrousel() {
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      return; // Esperar hasta que las categorías se carguen
    }

    const intervalId = setInterval(next, 3000);
    return () => clearInterval(intervalId);
  }, [categories]);

  const next = () => {
    setCounter((prevCounter) =>
      prevCounter === categories.length - 1 ? 0 : prevCounter + 1
    );
  };

  const prev = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? categories.length - 1 : prevCounter - 1
    );
  };

  if (categories.length === 0) {
    return null; // Mostrar algo mientras se cargan las categorías
  }

  const currentCategory = categories[counter];
  const { character_photo, cover_photo, description } = currentCategory;

  return (
    <div  id="bg-container-main" className="hidden md:block bg-[#5b34c5] md:w-[90%] lg-w-[90%] xl-w-[95%] md:h-[24vh] md:flex rounded-[15px] " >
        <div id="seccion-izquierda" className="w-[50%] h-[24vh] md:flex md:items-center justify-around">
        <div className="w-[30%] h-[24vh] flex justify-start items-center px-[0.7rem]">
        <button onClick={prev} ><Arrow icon={icon_left}/></button>  
        </div>
        
<img className="lg:h-[12rem] lg:w-[10rem] lg:mb-[3rem] lg:mr-[4.5rem] xl:h-[13rem] xl:w-[10rem]" src={categories[counter].character_photo} alt="footer-1"/>
<img className="md:h-[11rem] lg:w-[7rem] md:mb-[3rem] lg:mr-[4rem] xl:w-[9rem] xl:h-[11rem]" src={categories[counter].cover_photo} alt="footer-1"/>
        </div>
        <div id="secccion-derecha" className=" w-[50%] h-[24vh] md:flex md:justify-start md:items-center">
        <div id="texto-sec-derecha" className="md:flex md:flex-col text-[#FFF] lg:w-[65%]">
          <h2>Shonen</h2>
          <p className="text-[0.8rem]">{categories[counter].description}</p>
        </div>
        <div id="sec-flecha-derecha" className="w-[35%] h-[24vh] flex justify-end items-center lg:px-[2rem]">
        <button onClick={next} ><Arrow icon={icon_right}/></button> 

        </div>
        </div>
      </div>
  );
}
