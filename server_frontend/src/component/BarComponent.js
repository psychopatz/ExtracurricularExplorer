import { Box, Paper } from "@mui/material";

const BarComponent = () => {
    return ( 
        <Box  display="flex">
            <Box component="div" sx={{
                bgcolor:"primary.main" ,
                width:'50%',
                height:100
            }}            
            >
            </Box>
            <Box component="div" sx={{
                 bgcolor:"secondary.main",
                width:'50%',
                height:100
            }}>

            </Box>
        </Box>

     );
}
 
export default BarComponent;