import { Link } from "react-router-dom";
import { AccountTypeContext } from "../../App";
import { useState, useContext } from "react";
import { AppBar, Box, Drawer, Container, Toolbar, IconButton, Stack, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoLight from "../../assets/icons/logo.svg";
import SidebarLinks from "./SidebarLinks";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

    // get account type context
    const accountType = useContext(AccountTypeContext).accountType;

    // const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const logout = () => {
        setIsDrawerOpen(false);
        localStorage.clear();
        window.location.reload();
    }


    return (
        <AppBar position="static" sx={{
            backgroundColor: '#fff',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }} >
                    <IconButton>
                        <Link to="/Home">
                            <img src={logoLight} alt="Komitex Stock Logo" />
                        </Link>
                    </IconButton>
                    <Stack direction="row">
                        { accountType === null ? (
                            <Stack 
                                direction="row"
                                gap={1} 
                            >                                
                                <Button 
                                    variant='text' 
                                    size='medium' 
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold',
                                        color: 'komitexLight.main',
                                    }}
                                >
                                    <Link to="/signup">signup</Link>
                                </Button>
                                <Button 
                                    variant='outlined' 
                                    size='medium'
                                    sx={{
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold',
                                        color: 'komitexLight.main',
                                        borderColor: 'komitexLight.main',
                                    }}
                                >
                                    <Link to="/login">Login</Link>
                                </Button>
                            </Stack>
                        ) : (
                            <IconButton 
                                size="large" 
                                edge="start" 
                                aria-label="menu" 
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <MenuIcon sx={{
                                    color: 'komitexLight.main'
                                }} />
                            </IconButton>
                        )}
                    </Stack>

                </Toolbar>
            </Container>
            <Drawer 
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >   
                <Box 
                    role='presentation' 
                    display='flex'
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    sx={{ 
                        width: '250px',
                        height: '100%',
                    }}
                >
                    <Stack spacing={1} direction="column" alignItems={'flex-start'} pl={'10px'} py={'10px'}>
                        <SidebarLinks setIsDrawerOpen={setIsDrawerOpen} />
                    </Stack>
                    <Button
                        size="large"
                        color="error"
                        startIcon={<LogoutIcon />}
                        sx={{
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            color: 'error.light',
                        }}
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
}
 
export default Navbar;