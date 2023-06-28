import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Main({children}) {
  return (
    <div id="BODY" >
      <NavBar/>
   {children}
    <Footer/>
    </div>
  );
}
