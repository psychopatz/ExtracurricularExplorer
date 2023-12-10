import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import BarComponent from "./component/BarComponent";
import bgLogin from './resources/img/bgLogin.png';
import logo from './resources/img/cit-logo.png';
import schPlaceholder from './resources/img/loginCit.png';


const LoginBg = styled(Box)(() =>({
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: -10,
    backgroundImage: `url(${bgLogin})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
        
}))
const LoginPlaceholder = styled(Box)(() =>({
    position: "absolute",
    width: "auto%",
    height: "15%",
    zIndex: 10,
    
    
        
}))

const Img = styled(Box)(() =>({
    position: "absolute",
    width: "100%",
    height: "100%",
}))
const Login = () => {
    return ( 
        <>
        <BarComponent />
        <Box sx={{
            marginBottom: "47%",
            paddingTop: ".1%",
            paddingBottom: ".1%"
        }}>
        <LoginBg >
                

        </LoginBg>
        <LoginPlaceholder component="img"
            alt="CIT Logo"
            src={logo}
            />
        <Box sx={{
                border: 6,
                borderColor: 'secondary.main',
                scrollPaddingBottom: 0,
                position: "absolute",
                width: "35%",
                height: "32%",
                zIndex: 100,
                bottom:"30%",
                left: "10%"
            }}
        >
                <Img component="img"
                    alt="School Picture"
                    src={schPlaceholder}
                    sx={{
                        border: 6,
                        borderColor: 'primary.main',
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }}
            />
        </Box>
        <Paper
                sx={{
                position: "absolute",
                right: "5%",
                bottom: ".1%",
                paddingBottom:"15%",
                backgroundColor: "#cccccc",
                opacity: 0.85
                }}
                variant="outlined"
            >
                <Typography sx={{
                    paddingTop: "4%",
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: 900,


                }}>
                    Login
                </Typography>
                <form sx={{
                    padding:"40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "160px",
                }}>
                {/* Create the input box for the login */}
                <TextField
                    type="email"
                    label="Login"
                    variant="filled"
                    sx={{
                        width: "80%",
                        padding: "10%"
                        
                    }}
                />
                {/* Create the input box for the password */}
                <TextField
                    type="password"
                    label="Password"
                    variant="filled"
                    sx={{
                        width: "80%",
                        padding: "10%"
                        
                    }}
                />
                {/* Create the submit button for the login form */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        left:"38%",
                        paddingLeft:"10%",
                        paddingRight:"10%",
                        fontWeight:800
                    }}
                >
                    Login
                </Button>
                </form>
                <Typography sx={{
                        paddingTop:"10%",
                        paddingLeft:"40%"

                    }}>
                    Forgot Password?
                </Typography>
                <Typography sx={{
                        right:"10%",
                        paddingLeft:"35%"

                    }}>
                    New Student? Click Here
                </Typography>
            </Paper>
  
        </Box>
        
        
        
        <BarComponent />
        
        </>

     );
}
 
export default Login;