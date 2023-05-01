import { Container, Typography, Box, Alert } from "@mui/material";
import { Link } from "react-router-dom";

const LogisticsHome = () => {
    return (
        <Container maxWidth="xl">
            <Box 
                py="30px"
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                alignContent={'center'}
            >
                <Typography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    variant="h5" 
                    gutterBottom 
                    sx={{
                        color: 'komitexLight.main',
                    }} 
                >Home</Typography>
                <Alert severity="info">
                    To get started please add delivery locations 
                    <Link to="/Location" style={{textDecoration: 'underline', color: '#1976d2'}}> click here</Link>
                </Alert>
            </Box>
        </Container>
    );
}
 
export default LogisticsHome;