import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav_container">
                <Link to="/signup" >signup</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;