import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarComponent from "./component/BarComponent";
import useGet from "./hooks/useGet";
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
    
//Variables
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
  };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password);
  };

  const validateInputs = () => {
    // use a regular expression to check if the email is a valid email address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValid = emailRegex.test(email);
    const passwordValid = password.length >= 8;
    return emailValid && passwordValid;
  };
  const navigateToHome = () => {
    navigate("/");
  }

  const isLoggedin = () => {
    if( window.localStorage.getItem("loginSession") !=null ){
        navigateToHome();
    }

  }
  isLoggedin();

const {content, isPending, error} = useGet("/login/verify?email="+email+"&password="+password);

  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = validateInputs();
    if (valid) {
      // update the email and password variables with the state values
      // you can use any logic you want to store or send the data
      // for example, you can use localStorage, sessionStorage, or axios
     
      console.log(content)
      window.localStorage.setItem("loginSession",content);
      navigateToHome();
      // redirect to another page using the history object
      // you can use any path you want, but make sure it exists in your router
      //history.push('/home');
    } else {
      // if the result is false, show an error message to the user
      setErr('Invalid email or password');
      setEmail("");
      setPassword("");
    }
  };


 

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
                    <Typography sx={{
                    paddingTop: "4%",
                    textAlign: "center",
                    fontSize: 30,
                    color: 'red'


                }}>
                    {err}
                </Typography>
                <form sx={{
                    padding:"40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "160px",
                }}></form>
                {/* Create the input box for the login */}
                <TextField
                    name="password"
                    type="email"
                    label="Login"
                    variant="filled"
                    onChange={handleEmailChange}
                    sx={{
                        width: "80%",
                        padding: "10%"
                        
                    }}
                />
                {/* Create the input box for the password */}
                <TextField
                    name="password"
                    type="password"
                    label="Password"
                    variant="filled"
                    onChange={handlePasswordChange}
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
                    onClick={handleSubmit}
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