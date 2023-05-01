import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import startSession from "../../utils/auth/startSession";
import { AccountTypeContext } from "../../App";
import { Typography, Container, Paper, Box, TextField, Button, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl, MenuItem, Select, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import signupNewUser from "../../utils/auth/signupNewUser";

const Signup = () => {
    // use navigate
    const navigate = useNavigate();
    // state to check if fullname field is empty
    const [wrongFullname, setWrongFullname] = useState(false);
    // state to indicate wrong username or empty username
    const [wrongPhoneNumber, setWrongPhoneNumber] = useState(false);
    // state to indicate wrong email
    const [wrongEmail, setWrongEmail] = useState(false);
    // state to indicate wrong password
    const [wrongPassword, setWrongPassword] = useState(false);
    // state to indicate wrong password
    const [wrongRetypePassword, setWrongRetypePassword] = useState(false);
    // state to control password visibility
    const [showPassword, setShowPassword] = useState(false);
    // state to control visibility or retyped password
    const [showRetypedPassword, setShowRetypedPassword] = useState(false);
    // state to show erro text during login
    const [warning, setWarning] = useState('');

    // toggle password visibility
    const handleClickShowPassword = () => setShowPassword(show => !show);
    
    // toggle retype password visibility
    const handleClickShowRetypedPassword = () => setShowRetypedPassword(show => !show);
    
    // function to prevent default behaviour on mousedown on password input
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    // get accoutn type
    const {accountType, setAccountType} = useContext(AccountTypeContext);

    // if accounttype has been set, redirect user to homepage
    useEffect(() => {
        if (accountType !== null) {
            // navigate to home page
            navigate('/Home');
        }
    })

    // user info state
    const [userInfo, setUserInfo] = useState({
        fullname: '',
        phone_number: '',
        email_address: '',
        account_type: 'Merchant',
        password: '',
        retype_password: '',
    });

    // function to clear error indication from input field
    const clearError = (name) => {
        switch (name) {
            case 'fullname':
                if (wrongFullname === true) setWrongFullname(false);
                break;

            case 'phone_number':
                if (wrongPhoneNumber === true) setWrongPhoneNumber(false);
                break;

            case 'email_address':
                if (wrongEmail === true) setWrongEmail(false);
                break;

            case 'password':
                if (wrongPassword === true) setWrongPassword(false);
                break;

            case 'retype_password':
                if (wrongRetypePassword === true) setWrongRetypePassword(false);
                break;

            default:
                break;
        }
    }

    // function to handle input change and set userInfo object
    const handleChange = (event) => {
        // get input name and value
        let name = event.target.name;
        let value = event.target.value;

        clearError(name);

        // set user info
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const checkEmptyKeys = (obj) => {
        for (let key in obj) {
          if (obj[key] === '') {
            return true;
          }
        }
        return false;
    }

    const processResponseError = (response) => {
        switch (response) {
            case 'invalid fullname':
                setWarning(response);
                setWrongFullname(true);
                break;
        
            case 'invalid phone number':
                setWarning(response);
                setWrongPhoneNumber(true);
                break;
        
            case 'invalid email address':
                setWarning(response);
                setWrongEmail(true);
                break;
        
            case 'email already exist':
                setWarning(response);
                setWrongEmail(true);
                break;
        
            case 'password does not match':
                setWarning(response);
                setWrongRetypePassword(true);
                break;
                
            case 'invalid account type':
                setWarning(response);
                break;
                
            default:
                setWarning("something unexpected happened!");
                break;
        }
    }

    // console.table(userInfo);

    // handle user signup
    const handleSignup = async () => {

        if (checkEmptyKeys(userInfo)) {
            if (userInfo.fullname === '') setWrongFullname(true);
            if (userInfo.phone_number === '') setWrongPhoneNumber(true);
            if (userInfo.email_address === '') setWrongEmail(true);
            if (userInfo.password === '') setWrongPassword(true);
            if (userInfo.retype_password === '') setWrongRetypePassword(true);
            return setWarning('Empty Fields'); // end function
        }

        let response = await signupNewUser(userInfo);
        
        console.log(response);
        if (typeof response === 'string') {
            return processResponseError(response);
        }
        
        if (typeof response === 'object') {
            startSession(response);
            setAccountType(response.account_type);
            
            // navigate to home
            navigate('/Home');
        } 
    }

    const inputs = [
        {
            error: wrongFullname,
            label: 'Fullname',
            name: 'fullname',
            type: 'text',
        }, 
        {
            error: wrongPhoneNumber,
            label: 'Phone Number',
            name: 'phone_number',
            type: 'number',
        },
        {
            error: wrongEmail,
            label: 'Email Address',
            name: 'email_address',
            type: 'email',
        }
    ];

    const passwordInputs = [
        {
            error: wrongPassword,
            label: 'Password',
            name: 'password',
            passwordVisibility: showPassword,
            setPasswordVisibility: handleClickShowPassword
        },
        {
            error: wrongRetypePassword,
            label: 'Retype Password',
            name: 'retype_password',
            passwordVisibility: showRetypedPassword,
            setPasswordVisibility: handleClickShowRetypedPassword,
        }
    ]
    
    return (
        <Container maxWidth="xl">
            <Box
                py="30px" 
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
                <Paper elevation={3} sx={{
                    position: 'absolute',
                    transition: 'ease 1s',
                    top: `${wrongFullname || wrongPhoneNumber || wrongRetypePassword || wrongEmail || wrongPassword ? '90px' : 'unset'}`, 
                    display: `${wrongFullname || wrongPhoneNumber || wrongRetypePassword || wrongEmail || wrongPassword ? 'flex' : 'none'}`,
                }}>
                    <Alert severity="warning">
                        {warning}
                    </Alert>
                </Paper>
                <Typography 
                    fontWeight={'bold'}
                    variant="h4" 
                    gutterBottom 
                    sx={{
                        color: 'komitexLight.main',
                    }}
                >
                    Signup
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
                        Please fil in the form below to create an account, all fields are required
                    </Typography>
                    {inputs.map((input, index) => (
                        <TextField
                            key={index}
                            error={input.error}
                            label={input.label} 
                            type={input.type} 
                            variant="outlined" 
                            onChange={event => handleChange(event)}
                            id={input.name} 
                            fullWidth
                            color="komitexLight"
                            inputProps={{
                                name: `${input.name}`,
                            }}
                        />
                    ))}

                    {passwordInputs.map((input, index) => (
                        <FormControl key={index} sx={{width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="password">{input.label}</InputLabel>
                            <OutlinedInput
                                error={input.error}
                                id={input.name}
                                label={input.label}
                                type={input.passwordVisibility ? 'text' : 'password'}
                                color="komitexLight"
                                onChange={event => handleChange(event)}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={input.setPasswordVisibility}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {input.passwordVisibility ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{
                                    name: `${input.name}`,
                                }}
                            />
                        </FormControl>
                    ))}

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="account_type"
                            value={userInfo.account_type}
                            label="Account Type"
                            onChange={event => handleChange(event)}
                            inputProps={{
                                name: 'account_type',
                            }}
                        >
                        <MenuItem value={"Logistics"}>Logistics</MenuItem>
                        <MenuItem value={"Staff"}>Staff</MenuItem>
                        <MenuItem value={"Merchant"}>Merchant</MenuItem>
                        </Select>
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
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                    <Typography variant="caption" sx={{
                        color: 'komitexLight.muted',
                    }}>
                        Already have an account? <Link to="/login" style={{color: "#07427C", textDecoration: 'underline', fontWeight: 'bold'}}>Click here</Link> to login
                    </Typography>
                </Paper>
            </Box>
        </Container>
    )
}

export default Signup