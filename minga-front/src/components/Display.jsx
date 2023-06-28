export default function Display({ show,setShow }) {
    return (
        <div className="drawer">
            <p onClick={()=>setShow(!show)} className="close">X</p>
            <p className="option">HOME</p>
            <p className="option">SIGN IN</p>
            <p className="option">REGISTER</p>
        </div>
    )
}
