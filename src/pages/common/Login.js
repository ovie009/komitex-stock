import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import setSession from "../../utils/helpers/setSession";
import getSessionToken from "../../utils/helpers/getSessionToken";
import { AccountTypeContext } from "../../App";
import { Typography, Container, Paper, Box, TextField, Button, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {

    // use navigate
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

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
        <Container maxWidth="xl">
            <Box
                py="50px" 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
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
                    elevation={3}
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px',
                        display: 'flex',
                        flexFlow: 'column',
                        gap: '20px',
                    }}
                >
                    <TextField 
                        label="email" 
                        variant="outlined" 
                        id="email-address" 
                        fullWidth
                        color="komitexLight"
                    />
                    <FormControl sx={{width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            color="komitexLight"
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
                        />
                    </FormControl>
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
                    >
                        Login
                    </Button>
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