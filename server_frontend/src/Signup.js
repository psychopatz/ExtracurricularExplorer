import { Typography, Box,styled, Paper, Button, TextField} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns"
import BarComponent from "./component/BarComponent";
import IsLoggedIn from "./util/IsLoggedIn";
import bgLogin from './resources/img/bgLogin.png';
import logo from './resources/img/cit-logo.png';
import InputFieldComponent from "./component/InputFieldComponent";
import RadioComponent from "./component/RadioComponent";
import callApi from "./hooks/callApi";



const SignupBg = styled(Box)(() =>({
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
const SignupPlaceholder = styled(Box)(() =>({
    position: "absolute",
    width: "auto%",
    height: "12%",
    zIndex: 10,
    left:"30%"
    
    
        
}))


const SignupTextField ={
    
    position:"relative",
    variant : "filled",
    paddingBottom: "2%",
    input: {
                background: "white"
            }
        
}


const SignupButton = styled(Button)(() =>({
    left:"38%",
    paddingLeft:"10%",
    paddingRight:"10%",
    fontWeight:800,
    position:"absolute",
    top: "88%"
    
    
        
}))




const Signup = () => {

//Variables
    const navigate = useNavigate();
    let today = new Date();
    const [errorMsg, setErrorMsg] = useState('');
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
        gender: "",
        schoolId: "",
        department: ""

    })

    const handleInput = (e)=>{
        console.log("HandleInput: "+ e)
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
        console.log(data)
        console.log(newData)

    };
     
    

    
  const validateInputs = () => {
    //Only accepts CIT edu accounts and < 8 passwords
    const emailRegex = /^[a-zA-Z0-9._-]+@cit\.edu$/;
    const emailValid = emailRegex.test(data.email);
    const passwordValid = data.password.length >= 8 && data.password === data.rePassword;
    if(!emailValid){
        console.log(emailValid)
        setErrorMsg("Invalid Email: Must be a CIT edu account.")
    }else if (!passwordValid){
        console.log(passwordValid)
        setErrorMsg("Invalid Password: Must be same and no less than 8 characters")
    }
    return emailValid && passwordValid;
  };

  
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = validateInputs();
    if (valid) { 
        let endpoint = "/account/add";
        const method="POST";
        let userData = 
        {
            "firstName" : data.firstName,
            "lastName" : data.lastName,
            "email" : data.email,
            "password" : data.password,
            "gender": data.gender,
            "schoolId": data.schoolId,
            "department": data.department,
            "dateJoined": format(today, "yyyy-MM-dd")
        }
        try {
            const response = await callApi(endpoint, method, userData);

            if (response.status === 200) {
               console.log("Data: "+response.data)
               localStorage.setItem('loginSession', JSON.stringify(response.data));
               console.log("UserData: "+userData)
               navigate('/');
               

            }else {
              console.error('Failed to update user:', response.data);

            }
          } catch (error) {
            console.error('Error updating user:', error.message);
          }

        
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
        <SignupBg >
                

        </SignupBg>
        <SignupPlaceholder component="img"
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
                    fontSize: "100%",
                    color: 'red'
                }}>
                    {errorMsg}
                </Typography>


                <form sx={{
                    padding:"40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "160px",
                }}>

                </form>
                <Box sx= {{padding: "10%",backgroundColor: "transparent"}}>
                    
                        <InputFieldComponent 
                        name="firstName"
                        type="text"
                        label="FirstName:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <InputFieldComponent 
                        name="lastName"
                        type="text"
                        label="LastName:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <RadioComponent
                            name = "gender"
                            value = {data.gender}
                            options={[
                                {value: "Male",label: "Male"},
                                {value: "Female", label: "Female"}]                            }
                            onChange={handleInput}
                        
                        />
                        <InputFieldComponent 
                        name="email"
                        type="text"
                        label="CIT Email:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <InputFieldComponent 
                        name="schoolId"
                        type="text"
                        label="School ID:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <InputFieldComponent 
                        name="department"
                        type="text"
                        label="Department:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <InputFieldComponent 
                        name="password"
                        type="password"
                        label="Password:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        <InputFieldComponent 
                        name="rePassword"
                        type="password"
                        label="Retype Password:"
                        sx ={SignupTextField} 
                        onChange={handleInput}
                        />
                        
                <SignupButton
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </SignupButton>
                </Box>
                </form>
            </Paper>
  
        </Box>
        
        
        
        <BarComponent />
        
        </>

     );
}
 
export default Signup;