import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav_container" style={{
                display: 'flex',
                gap: '10px',
            }}>
                <Link to="/" >Home</Link>
                <Link to="/signup" >signup</Link>
                <Link to="/login" >login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;