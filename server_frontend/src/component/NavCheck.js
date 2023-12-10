import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";


const  NavCheck = ({children}) => {
    const location = useLocation()
    const hideNavbar = location.pathname === '/Login' || location.pathname === '/Signup';
    console.log("Location");
    console.log(location);
    console.log("ifHideNavBar")
    console.log(hideNavbar);
    return ( 
        
        <Box>
            {!hideNavbar && children}
        </Box>
        
     );
}
 
export default NavCheck;