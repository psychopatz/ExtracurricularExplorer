import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarComponent from "./component/BarComponent";
import IsLoggedIn from "./util/IsLoggedIn";
import bgLogin from './resources/img/bgLogin.png';
import logo from './resources/img/cit-logo.png';
import schPlaceholder from './resources/img/loginCit.png';
import callApi from "./hooks/callApi";
import InputFieldComponent from "./component/InputFieldComponent";


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
    height: "8%",
    zIndex: 10,
    
    
        
}))

const Img = styled(Box)(() =>({
    position: "absolute",
    width: "100%",
    height: "100%",
}))

const LoginTextField ={
    
    position:"relative",
    variant : "filled",
    paddingBottom: "4%",
    input: {
                background: "white"
            }
        
}



const Login = () => {
    document.title =  'Moderator Login ';

//Variables
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
  
    
    let [data, setData] = useState({
        email: "",
        password: ""
    })

    
    const handleInput = (e)=>{
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);

    };

  const validateInputs = () => {
    //Only accepts CIT edu accounts and < 8 passwords
    const emailRegex = /^[a-zA-Z0-9._-]+@cit\.edu$/;
    const emailValid = emailRegex.test(data.email);
    const passwordValid = data.password.length >= 8;
    if(!emailValid){
        console.log(emailValid)
        setErrorMsg("Invalid Email: Must be a CIT edu account.")}
    else if (!passwordValid){
        console.log(passwordValid)
        setErrorMsg("Invalid Password: Must no less than 8 characters")}
    return emailValid && passwordValid;   
    };

    
    
    if (IsLoggedIn()) { 
      navigate("/")
    }


    const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg('');

    const valid = validateInputs();
    let isDone = false;
    console.log('isValid: ' + valid);

    if (valid) {
      try {
        const apiResponse = await callApi('/login/verify', 'POST', data);
        console.log('API ResponseEz:', apiResponse);

        // Handle the API response as needed
        if (apiResponse && apiResponse.data.id >= 1) {
          localStorage.setItem('loginSession', JSON.stringify(apiResponse.data));
          isDone = true
        } else if (apiResponse && apiResponse.id === -1) {
          setErrorMsg('Invalid Password');
        } else if (apiResponse && apiResponse.id === -2) {
          setErrorMsg('Moderator Email not found');
        }
        // Handle other conditions if needed
      } catch (error) {
        setErrorMsg('Fatal Error: ' + error.message);
      }
    }
    if(isDone){
        navigate('/');
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
                bottom:"40%",
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
                   Moderator Login
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
                    fontSize: 20,
                    color: 'red'


                }}>
                    {errorMsg}
                </Typography>
                <form
                    sx={{
                        padding:"40%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "160px",
                }}></form>
                {/* Create the input box for the login */}
                <Box sx={{
                    padding:"14%",
                    
                    }}>
                    <InputFieldComponent 
                        name="email"
                        type="text"
                        label="Email: "
                        sx ={LoginTextField} 
                        onChange={handleInput}
                        />
                {/* Create the input box for the password */}
                <InputFieldComponent 
                        name="password"
                        type="password"
                        label="Password: "
                        sx ={LoginTextField} 
                        onChange={handleInput}
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
                </Box>
                </form>
                <Typography sx={{
                        paddingTop:"10%",
                        paddingLeft:"40%"

                    }}>
                    Forgot Password?
                </Typography>
                <Typography 
                    onClick={()=>(navigate("/signup"))}
                    sx={{
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