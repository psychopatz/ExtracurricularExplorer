import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";


const  NavCheck = ({children}) => {
    const location = useLocation()
    const hidePaths = ["/login", "/signup"];
    const hideNavbar = hidePaths.includes(location.pathname);

    return ( 
        
        <Box>
            {!hideNavbar && children}
        </Box>
        
     );
}
 
export default NavCheck;