import { Link } from "react-router-dom";
import endSession from "../utils/endSession";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        endSession();

        // navigate to home page
        navigate('/');
    }

    return (
        <nav>
            <div className="nav_container" style={{
                display: 'flex',
                gap: '10px',
            }}>
                <Link to="/" >Home</Link>
                <Link to="/signup" >signup</Link>
                <Link to="/login" >login</Link>
                <button onClick={() => handleLogout()}>logout</button>

            </div>
        </nav>
    );
}
 
export default Navbar;