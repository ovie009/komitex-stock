import Input from "../../components/common/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getSessionToken from "../../utils/helpers/getSessionToken";

const Signup = () => {

    const navigate = useNavigate();

    // state to store user info
    const [userInfo, setUserInfo] = useState({
        fullname: '',
        email_address: '',
        phone_number: '',
        password: '',
        retype_password: '',
        account_type: 'Merchant'
    });

    useEffect(() => {
        const session_token = getSessionToken();
        if (session_token) {
            navigate('/');            
        }
    });

    // state to store response data from server
    const [responseData, setResponseData] = useState('');

    console.log(responseData);

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

    const inputFeilds = [
        {
            id: 'fullname',
            label: 'Fullname',
            type: 'text',
            name: 'fullname',
            placeholder: 'John Doe'
        },
        {
            id: 'email',
            label: 'Email Address',
            type: 'email',
            name: 'email_address',
            placeholder: 'johndoe@gmail.com'
        },
        {
            id: 'phone_number',
            label: 'Phone Number',
            type: 'number',
            name: 'phone_number',
            placeholder: '+2348123456789'
        },
        {
            id: 'password',
            label: 'Password',
            type: 'password',
            name: 'password',
            placeholder: 'type your password'
        },
        {
            id: 'retype_password',
            label: 'Retype Password',
            type: 'password',
            name: 'retype_password',
            placeholder: 'retype your password'
        },
    ]

    const submitUserInfo = async (event) => {
        event.preventDefault();
        // console.table(userInfo);

        try {
            const response = await axios.post(`http://localhost/komitexstock/api/pages/${userInfo.account_type}/signup.php`, userInfo);

            setResponseData(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.error(error);
        }

    }

    return ( 
        <>
            <h1>Signup</h1>
            <form onSubmit={event => submitUserInfo(event)} action="" className="signup_form">
                {
                    inputFeilds.map(inputField => (
                        <Input 
                            key={inputField.id} 
                            id={inputField.id} 
                            label={inputField.label} 
                            type={inputField.type} 
                            name={inputField.name} 
                            placeholder={inputField.placeholder}
                            handleChange={handleChange}
                        />
                    ))
                }
                <label style={{marginRight: '10px'}} htmlFor="account_type">Select your account type</label>
                <select defaultValue={userInfo.account_type} name="account_type" id="account_type" onChange={event => handleChange(event)} required >
                    <option value="Logistics">Logistics</option>
                    <option value="Merchant">Merchant/Seller</option>
                    <option value="Staff">Staff</option>
                </select>
                <br />
                <br />
                <button type="submit">submit</button>
            </form>
        </>
    );
}
 
export default Signup;