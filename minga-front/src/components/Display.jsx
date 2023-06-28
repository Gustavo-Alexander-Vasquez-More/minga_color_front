export default function Display({ show, setShow }) {
    const handleClose = () => {
      setShow(false);
    };
  
    return (
      <div className={`drawer ${show ? "show" : ""}`}>
        <button onClick={handleClose}>
          <p className="close text-[2rem]">X</p>
        </button>
        <div className="h-[20vh] flex flex-col justify-around">
          <a href="#"><p className="option">HOME</p></a>
          <a href=""><p className="option">SIGN IN</p></a>
          <a href=""><p className="option">REGISTER</p></a>
        </div>
      </div>
    );
  }