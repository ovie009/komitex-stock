const Login = () => (
    <div>
        <h1>Login</h1>
        <form action="">
            <div>
                <label htmlFor="email_address">Email Address</label>
                <input type="email" name="email_address" id="email_address" placeholder="johndoe@gmail.com" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="type your password" />
            </div>
            <div className="login_button_wrapper">
                <button>login</button>
            </div>
        </form>
    </div>
)

export default Login