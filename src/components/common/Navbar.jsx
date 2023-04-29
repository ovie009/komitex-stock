import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Navbar = () => {

    const navigate = useNavigate();

    // eslint-disable-next-line
    const {accountType, setAccountType} = useContext(AccountTypeContext);


    const endSession = () => {
        localStorage.removeItem('session_token');
        localStorage.removeItem('account_type');
        localStorage.removeItem('company_id');
        localStorage.removeItem('fullname');
        localStorage.removeItem('phone_number');
        localStorage.removeItem('company_id');
        localStorage.removeItem('preferred_page');
        
        // set accountype to default value
        setAccountType('');
    
        // navigate to home page
        navigate('/');
    };



    return (
        <nav>
            <div className="nav_container" style={{
                display: 'flex',
                gap: '10px',
            }}>
                {accountType === null ? ( <>
                        <Link to="/signup">signup</Link>
                        <Link to="/login">login</Link>
                    </> ) : ( <>
                        <Link to="/" >Home</Link>
                        <Link to="/activities">activities</Link>
                        <Link to="/dispatch">dispatch</Link>
                        <Link to="/inventory">inventory</Link>
                        <Link to="/location">location</Link>
                        <Link to="/report">report</Link>
                        <Link to="/staffs">staffs</Link>
                        <Link to="/stock">stock</Link>
                        <Link to="/waybill">waybill</Link>
                        <Link to="/teams">teams</Link>
                        <button onClick={() => endSession()}>logout</button>
                    </> )
                }
``            </div>
        </nav>
    );
}
 
export default Navbar;