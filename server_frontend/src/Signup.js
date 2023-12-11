import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarComponent from "./component/BarComponent";
import IsLoggedIn from "./util/IsLoggedIn";
import SetOption from "./util/SetOption";
import bgLogin from './resources/img/bgLogin.png';
import logo from './resources/img/cit-logo.png';



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
    height: "12%",
    zIndex: 10,
    left:"30%"
    
    
        
}))





const Signup = () => {

//Variables
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        rePassword: "",
    })

    const handle = (e)=>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(data)
        console.log(newData)

    };
     
    

    
  const validateInputs = () => {
    // use a regular expression to check if the email is a valid email address
    if(data.password !== data.rePassword){
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValid = emailRegex.test(data.email);
    const passwordValid = data.password.length >= 8;
    return emailValid && passwordValid;
  };

  
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = validateInputs();
    if (valid) { 
        let endpoint = SetOption("url")+"/account/add";
        let userData = 
        {
            "firstName" : data.fName,
            "lastName" : data.lName,
            "email" : data.email,
            "password" : data.password
        }
        await axios.post(endpoint,userData)
        .then(res => {
            console.log(res.data)
        })
        console.log(userData)
        navigate('/');
    } else {
        setErr("Invalid Password Detected");
    }
  };

    if(IsLoggedIn()){
        navigate('/');
    }
    

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
        
            <Paper
                sx={{
                position: "absolute",
                right: "35%",
                top: "28%",
                backgroundColor: "#cccccc",
                opacity: 0.85,
                width: "30%",
                paddingBottom: "5%"
                }}
                variant="outlined"
            >
                <Typography sx={{
                    paddingTop: "4%",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 900,

                }}>
                    Registration Form
                </Typography>

                <form 
                    onSubmit={handleSubmit}
                    sx={{
                    padding:"40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "160px",
                }}>
                    <Typography sx={{ //Error
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
                <TextField
                    id="fName"
                    name="firstName"
                    type="text"
                    label="FirstName"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                       width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                <TextField
                    id="lName"
                    name="lastName"
                    type="text"
                    label="LastName"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                <TextField
                    id="idNum"
                    name="idNumber"
                    type="number"
                    label="ID Number"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                
                
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                <TextField
                    id="deptCourse"
                    name="DeptCourse"
                    type="text"
                    label="Department/Course"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                       width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    autoComplete="off"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
                        input: {
                                    background: "white"
                            }
                        
                    }}
                />
                <TextField
                    id="rePassword"
                    name="password"
                    type="password"
                    label="Retype Password"
                    autoComplete="off"
                    variant="filled"
                    onChange={(e) => handle(e)}
                    sx={{
                        width: "80%",
                        paddingLeft: "8%",paddingRight: "8%",
                        position:"relative",
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
                    sx={{
                        left:"38%",
                        paddingLeft:"10%",
                        paddingRight:"10%",
                        fontWeight:800,
                        position:"absolute",
                        top: "88%"
                    }}
                >
                    Submit
                </Button>
                </form>
            </Paper>
  
        </Box>
        
        
        
        <BarComponent />
        
        </>

     );
}
 
export default Signup;