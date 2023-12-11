import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";


const  NavCheck = ({children}) => {
    const location = useLocation()
    const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

    return ( 
        
        <Box>
            {!hideNavbar && children}
        </Box>
        
     );
}
 
export default NavCheck;