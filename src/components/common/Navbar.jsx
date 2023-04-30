import { Link } from "react-router-dom";
import { AccountTypeContext } from "../../App";
import { useState, useContext } from "react";
import { AppBar, Box, Drawer, Container, Toolbar, IconButton, Stack, MenuList, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoLight from "../../assets/icons/logo.svg";
import SidebarLinks from "./SidebarLinks";

const Navbar = () => {

    // get account type context
    const accountType = useContext(AccountTypeContext).accountType;

    // const navigate = useNavigate();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                        <Link to="/">
                            <img src={logoLight} alt="Komitex Stock Logo" />
                        </Link>
                    </IconButton>
                    <Stack direction="row">
                        { accountType === null ? (
                            <>
                                <Button variant='text' size='large' disableRipple>
                                    <Link to="/login">LOGIN</Link>
                                </Button>
                                
                                <Button variant='text' size='large' disableRipple>
                                    <Link to="/signup">SIGNUP</Link>
                                </Button>
                            </>
                        ) : (
                            <IconButton 
                                size="large" 
                                edge="start" 
                                aria-label="menu" 
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <MenuIcon />
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
                <Box role='presentation' sx={{ width: '250px' }}>
                    <Stack spacing={2} direction="column">
                        <MenuList>
                            <SidebarLinks setIsDrawerOpen={setIsDrawerOpen} />
                        </MenuList>
                    </Stack>
                </Box>
            </Drawer>
        </AppBar>
    );
}
 
export default Navbar;