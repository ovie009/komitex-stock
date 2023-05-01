import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import startSession from "../../utils/auth/startSession";
import { AccountTypeContext } from "../../App";
import { Typography, Container, Paper, Box, TextField, Button, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import getUser from "../../utils/auth/getUser";

const Login = () => {


    // use navigate
    const navigate = useNavigate();

    // variable to indicate wrong email
    const [wrongEmail, setWrongEmail] = useState(false);

    // variable to indicate wrong password
    const [wrongPassword, setWrongPassword] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const accountType = useContext(AccountTypeContext).accountType;
    const setAccountType = useContext(AccountTypeContext).setAccountType;

    useEffect(() => {
        if (accountType !== null) {
            // navigate to home page
            navigate('/Home');
        }
    })

    // user info state
    const [userInfo, setUserInfo] = useState({
        email_address: '',
        password: ''
    });

    // function to handle input change and set userInfo object
    const handleChange = (event) => {
        // get input name and value
        let name = event.target.name;
        let value = event.target.value;

        // if user is inputing inot email fisld where there was an error prior, remove error indication
        if (name === 'email_address' && wrongEmail === true) {
            setWrongEmail(false);
        }
        
        // if user is inputing into password field where there was an erro prior, remove error indication
        if (name === 'password' && wrongPassword === true) {
            setWrongPassword(false);
        }

        // set user info
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    console.log(userInfo);

    const handleLogin = async () => {

        if (userInfo.email_address === '' || userInfo.password === '') {
            if (userInfo.email_address === '') setWrongEmail(true);
            if (userInfo.password === '') setWrongPassword(true);
            return;
        }

        let response = await getUser(userInfo);
        
        if (response) {
            if (response === 'incorrect password') {
                return setWrongPassword(true);
            } else if (response === 'user doesn\'t exist') {
                return setWrongEmail(true);
            }
    
            startSession(response);
            setAccountType(response.account_type);
            window.location.reload();
        }
    }
    
    // console.log(responseData);

    return (
        <Container maxWidth="xl">
            <Box
                py="50px" 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    maxWidth: '400px',
                    height: 'fit-content',
                }}
            >   
                <Typography 
                    fontWeight={'bold'}
                    variant="h4" 
                    gutterBottom 
                    sx={{
                        color: 'komitexLight.main',
                    }}
                >
                    Login
                </Typography>
                <Paper 
                    elevation={5}
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px',
                        display: 'flex',
                        flexFlow: 'column',
                        gap: '20px',
                    }}
                >   
                    <Typography variant="body1">
                        To login please enter your email address and password
                    </Typography>
                    <TextField
                        error={wrongEmail}
                        label="email" 
                        variant="outlined" 
                        onChange={event => handleChange(event)}
                        id="email-address" 
                        fullWidth
                        color="komitexLight"
                        inputProps={{
                            name: 'email_address'
                        }}
                    />
                    <FormControl sx={{width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            error={wrongPassword}
                            id="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            color="komitexLight"
                            onChange={event => handleChange(event)}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }
                            inputProps={{
                                name: 'password'
                            }}
                        />
                    </FormControl>
                    <Typography variant="subtitle2">
                        Forgot Password?
                        <Link to="/signup" style={{color: "#07427C", textDecoration: 'underline', fontWeight: 'bold'}}> Reset It!</Link>
                    </Typography>
                    <Button 
                        size="large" 
                        fullWidth
                        color="komitexLight"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            textTransform: 'capitalize',
                        }}
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Typography variant="caption" sx={{
                        color: 'komitexLight.muted',
                    }}>
                        If you don't have an account? <Link to="/signup" style={{color: "#07427C", textDecoration: 'underline', fontWeight: 'bold'}}>Click here</Link> to open an account in few minutes
                    </Typography>
                </Paper>
            </Box>
        </Container>
    )

    // return (
    //     <div>
    //         <h1>Login</h1>
    //         <form onSubmit={event => handleLogin(event, userInfo)}>
    //             <div>
    //                 <label htmlFor="email_address">Email Address</label>
    //                 <input 
    //                     className={wrongEmail ? "wrong" : ""}
    //                     type="email" 
    //                     onChange={event => handleChange(event)} 
    //                     name="email_address" 
    //                     id="email_address" 
    //                     placeholder="johndoe@gmail.com" 
    //                     required 
    //                 />
    //             </div>
    //             <div>
    //                 <label htmlFor="password">Password</label>
    //                 <input
    //                     className={wrongPassword ? "wrong" : ""}
    //                     type="password" 
    //                     onChange={event => handleChange(event)} 
    //                     name="password" 
    //                     id="password" 
    //                     placeholder="type your password" 
    //                     required 
    //                 />
    //             </div>
    //             <div className="login_button_wrapper">
    //                 <button type="submit">login</button>
    //             </div>
    //         </form>
    //     </div>
    // )
}

export default Login