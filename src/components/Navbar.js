import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav class="navbar navbar-dark bg-primary">
            <div class="navbar_div--left"><a class="navbar-brand" href="/dashboard">PetShop</a></div>
            <div  class="navbar_div--right">
         
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Pets</Link>
                <Link to="/edit">Edit</Link>
          
            </div>
            </nav>
        </>
        )
}

export default Navbar;