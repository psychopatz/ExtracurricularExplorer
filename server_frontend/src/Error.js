import { Box, Typography } from "@mui/material";
import BarComponent from "./component/BarComponent";

const Error = () => {
    document.title =  'Error 404';
    return ( 
        <>
        <BarComponent/>
        <Box align="center">
            <Typography
            sx={{
                color:"red",
                fontSize:200,
                fontWeight:900
            }}
            >ERROR 404 PAGE NOT FOUND</Typography>
        </Box> 
        <BarComponent/>
        </>
       
    );
}
 
export default Error;
