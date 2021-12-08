import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-dark bg-primary">
            <div className="navbar_div--left"><a className="navbar-brand" href="/dashboard">C.A.S</a></div>
            <div  className="navbar_div--right">
         
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Pets</Link>
                <Link to="/about_us">About us</Link>
          
            </div>
            </nav>
        </>
        )
}

export default Navbar;