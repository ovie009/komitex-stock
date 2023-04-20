import { useState } from "react"

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email_address: '',
        password: ''
    });

    
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

    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={event => handleLogin(event)}>
                <div>
                    <label htmlFor="email_address">Email Address</label>
                    <input type="email" onChange={event => handleChange(event)} name="email_address" id="email_address" placeholder="johndoe@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={event => handleChange(event)} name="password" id="password"  placeholder="type your password" required />
                </div>
                <div className="login_button_wrapper">
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

export default Login