import { NavLink,useNavigate  } from "react-router-dom";
import logo from './resources/img/cit-logo.png';
import { AppBar, Box, Button, ButtonGroup, Toolbar,styled } from "@mui/material";



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
    const menuItems = [
        {
        text: "Home",
        path: "/"
        },
        {
        text: "About",
        path: "/About"
        },
        {
        text: "Organizations",
        path: "/Organization"
        },
        {
        text: "Events",
        path: "/Events"
        },
        {
        text: "Faqs",
        path: "/Faqs"
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
                    alt="CIT Logo"
                    src={logo}
                    />

                
                <NavButtonGroup>
                    {menuItems.map(item => (
                        <NavButton 
                        component={NavLink}
                        to={item.path}
                        exact
                        activeClassName="active"
                        variant="text"
                        key={item.text}
                        onClick= {() => navigate(item.path)}
                        >
                            {item.text}                           
                        </NavButton>

                    ))}
                </NavButtonGroup>
                </Toolbar>

            </AppBar>
        </Box>
     );
}
 
export default Navbar;