import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import setSession from "../../utils/helpers/setSession";
import getSessionToken from "../../utils/helpers/getSessionToken";
import { AccountTypeContext } from "../../App";

const Login = () => {

    // use navigate
    const navigate = useNavigate();

    
    useEffect(() => {
        const session_token = getSessionToken();
        if (session_token) {
            navigate('/');            
        }
    });
    
    // eslint-disable-next-line
    const setAccountType = useContext(AccountTypeContext).setAccountType;

    // user info state
    const [userInfo, setUserInfo] = useState({
        email_address: '',
        password: ''
    });

    // variable to indicate wrong email
    const [wrongEmail, setWrongEmail] = useState(false);

    // variable to indicate wrong password
    const [wrongPassword, setWrongPassword] = useState(false);

    // function to handle input change and set userInfo object
    const handleChange = (event) => {
        // get input name and value
        let name = event.target.name;
        let value = event.target.value;

        // set user info
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const handleResponse = (response) => {
        if (response === 'incorrect password') {
            return setWrongPassword(true);
        } else if (response === 'user doesn\'t exist') {
            return setWrongEmail(true);
        }

        setSession(response);

        // set account type for account type context
        setAccountType(response.account_type);

        return navigate('/');
    }

    const handleLogin = async (event, userInfo) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost/komitexstock/api/pages/common/login.php`, userInfo);

            handleResponse(response.data);

        } catch (error) {
            console.error(error);
        }
    }
    
    // console.log(responseData);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={event => handleLogin(event, userInfo)}>
                <div>
                    <label htmlFor="email_address">Email Address</label>
                    <input 
                        className={wrongEmail ? "wrong" : ""}
                        type="email" 
                        onChange={event => handleChange(event)} 
                        name="email_address" 
                        id="email_address" 
                        placeholder="johndoe@gmail.com" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        className={wrongPassword ? "wrong" : ""}
                        type="password" 
                        onChange={event => handleChange(event)} 
                        name="password" 
                        id="password" 
                        placeholder="type your password" 
                        required 
                    />
                </div>
                <div className="login_button_wrapper">
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

export default Login