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
                <Link to="/" >Home</Link>
                {accountType === '' && ( <>
                        <Link to="/signup" >signup</Link>
                        <Link to="/login" >login</Link>
                    </> )
                }
                <button onClick={() => endSession()}>logout</button>

            </div>
        </nav>
    );
}
 
export default Navbar;