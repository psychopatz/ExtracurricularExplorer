import { NavLink,useNavigate  } from "react-router-dom";
import logo from '../resources/img/cit-logo.png';
import { AppBar, Box, Button, ButtonGroup, Toolbar,styled } from "@mui/material";
import NavDropdown from "../component/NavDropdown";



const NavButton = styled(Button)(({ theme }) => ({
  // Default styles for the button
  color: theme.palette.common.black,
  backgroundColor: theme.palette.background,
  // Styles for the active button
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: '#F0DA7D',
    padding: "20px"
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
    padding: "20px",
    fontSize: "15px",
    fontWeight: 1000
  }
}));

const NavBox = styled(Box)(() =>({
    height: 66,
    width: 'auto',
    maxHeight: { xs: 60, md: 160 },
    maxWidth: { xs: 'auto', md: 'auto' }
}))

const NavButtonGroup = styled(ButtonGroup)(()=>({
    marginLeft: 'auto'
}))

    
const  Navbar = () => {
    const navigate = useNavigate();
    let menuItems = [
        {
        text: "Home",
        path: "/"
        },
        {
        text: "About",
        path: "/about"
        },
        {
        text: "Organizations",
        path: "/organization"
        },
        {
        text: "Events",
        path: "/events"
        },
        {
        text: "Faqs",
        path: "/faqs"
        }
    ]

    
    
    

    return ( 
        <Box sx={{flexGrow:-1}}>
            
            <AppBar position="static" color="background" 
            sx={{
                borderTop: 6,
                borderBottom: 6,
                borderColor: 'primary.main',
                scrollPaddingBottom: 0
            }}>
                <Toolbar color="primary">
                    <NavBox     
                    component="img"
                    onClick={()=>{ navigate("/login")}}
                    alt="CIT Logo"
                    src={logo}
                    
                    />

                
                <NavButtonGroup>
                    {menuItems.map(item => (
                        <NavButton 
                        component={NavLink}
                        to={item.path}
                        variant="text"
                        key={item.text}
                        onClick= {() => navigate(item.path)}
                        >
                        {item.text}                           
                        </NavButton>
                    ))}
                </NavButtonGroup>
                <NavDropdown />
                </Toolbar>

            </AppBar>
        </Box>
     );
}
 
export default Navbar;