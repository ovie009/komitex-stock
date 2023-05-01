import { Container, Typography, Box } from "@mui/material";

const LogisticsWaybill = () => {
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
                >Waybill</Typography>
            </Box>
        </Container>
    );
}
 
export default LogisticsWaybill;