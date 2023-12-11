import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarComponent from "./component/BarComponent";
import IsLoggedIn from "./util/IsLoggedIn";
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
    document.title =  'Moderator Login ';

//Variables
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [trigger,setTrigger] = useState(false);
    let [data, setData] = useState({
        email: "",
        password: "",
    })

    
    const handle = (e)=>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);

    };

  const validateInputs = () => {
    document.title =  'Login';
    // use a regular expression to check if the email is a valid email address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValid = emailRegex.test(data.email);
    const passwordValid = data.password.length >= 8;
    return emailValid && passwordValid;
  };

    
    useEffect(() => {
    if (IsLoggedIn()) {
      navigate("/")
    }
    }, [trigger]);

    useEffect(() => {
        fetchData();
        setTrigger(false)
    }, [trigger]);

    const fetchData = async () => {
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8080/login/verify',
      data: { email: data.email, password: data.password},
    };

    try {
      const { data } = await axios.request(options);
      console.log("data:"+data);
      if(data>0){
            window.localStorage.setItem("loginSession", JSON.stringify(data));
            
      }else if (data === -1 && trigger){
        setErr("User Not Found")
      }else if (data === -2){
        setErr("Invalid Password")
      }
      
    } catch (error) {
      console.error("error:"+error);
    }
  };

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    
    const valid = validateInputs();
   
    if (valid) {
        setTrigger(true);
    }
    else{
        setData({
        email: "",
        password: "",

    })
    
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
                <form
                    sx={{
                        padding:"40%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "160px",
                }}></form>
                {/* Create the input box for the login */}
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email:"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        padding: "10%",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                {/* Create the input box for the password */}
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password:"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        padding: "10%",
                        input: {
                                    background: "white"
                            }
                        
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