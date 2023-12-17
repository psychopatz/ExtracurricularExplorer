import React, { useEffect, useState } from 'react';
import { Box, Button, TextField , Typography } from "@mui/material";
import BarComponent from './component/BarComponent';
import callApi from './hooks/callApi';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';





    const AccountCanvas = styled(Box)(() =>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 20,


    }))
    const AccountContent = styled(Box)(() =>({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 20,


    }))

        const AccountField = styled(TextField)(() =>({
          marginTop: 10,
          width: "20%",
          "& .MuiInputBase-input.Mui-disabled": {
              color: "black",
              borderColor: "red",
              WebkitTextFillColor: "black",
          },


    }))
    const AccountText = styled(Typography)(({theme}) =>({
      fontSize: 50,
      fontWeight: 800,
      color: theme.palette.primary.main,
      
    }))

    const AccountBtn = styled(Button)(() =>({
        fontWeight:800,
        
    
        
}))

const Settings = () => {
    const navigate = useNavigate();
    const { REACT_APP_BACKEND_URL} = process.env;
    const userData = window.JSON.parse(localStorage.getItem('loginSession'))
    const [userInfo,setUserInfo] = useState(null)
       
    
    const fetchData = async () => {
        const endpoint = "/account/user/"+userData.id; 
        try {
          const response = await callApi(endpoint, 'GET');
          setUserInfo(response)
          console.log('Server Data:', userInfo);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
  };

    useEffect(() => {
        fetchData()

    }, []);
    document.title =  userData.firstName+" \'s Profile";    

//User Data
      const updateUser = async () => {
          const endpoint = "/account/user/"+userData.id;
          const method = 'PUT';
          console.log("UserInfo: ",userInfo)

          try {
            const response = await callApi(endpoint, method, userInfo);

            if (response.status === 200) {
              console.log('User updated successfully:', response.data);
              localStorage.setItem('loginSession', JSON.stringify(userInfo));
              window.location.reload()
              

            } else {
              console.error('Failed to update user:', response.data);

            }
          } catch (error) {
            console.error('Error updating user:', error.message);
          }
};

const deleteUser = async () => {
          const endpoint = "/account/user/"+userData.id;
          const method = 'DELETE';
          console.log("UserInfo: ",userInfo)

          try {
            const response = await callApi(endpoint, method);

            if (response.status === 200) {
              console.log('User Deleted Successfully:', response.data);
              navigate("/logout")
              

            } else {
              console.error('Failed to update user:', response.data);

            }
          } catch (error) {
            console.error('Error updating user:', error.message);
          }
};

    const handleInput = (e)=>{
        console.log("HandleInput: "+ e)
        const newData = {...userData};
        newData[e.target.name] = e.target.value;
        setUserInfo(newData);
        console.log(userInfo)
        console.log(newData)

    };

    




    return (  
        <>
          <BarComponent/>
          
                <Box sx={{backgroundColor: "#dfe05c"}}>
                  {userData && (
                <>
                <AccountText
                align='center'

                >Account Settings
                </AccountText>

                <AccountCanvas>
                
                <AccountContent>
                  <AccountField
                    label="First Name:"
                    name="firstName"
                    onChange={handleInput}
                    defaultValue={userData.firstName}
                  />
                  <AccountField
                    label="Last Name:"
                    name="lastName"
                    onChange={handleInput}
                    defaultValue={userData.lastName}
                  />
                  <AccountField
                    label="Password:"
                    name= "password"
                    onChange={handleInput}
                    defaultValue={userData.password}
                  />
                </AccountContent>
                <AccountContent>
                  <AccountField
                    label="Email:"
                    name="email"
                    onChange={handleInput}
                    defaultValue={userData.email}
                  />
                  <AccountField
                    label="School ID:"
                    name="schoolId"
                    onChange={handleInput}
                    defaultValue={userData.schoolId}
                  />
                  <AccountField
                    label="Department:"
                    name= "department"
                    onChange={handleInput}
                    defaultValue={userData.department}
                  />

                </AccountContent>

                <AccountContent>
                    <AccountBtn
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={updateUser}
                        >
                            Submit
                        </AccountBtn>
                        <AccountBtn
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={deleteUser}
                        >
                            Delete Account
                        </AccountBtn>
                  </AccountContent>
                  <AccountContent>
                    
                  </AccountContent>
                        
                </AccountCanvas>
                
                

                </>)
                  
                }
                </Box>
          
          <BarComponent/>
          

        
          
          
        </>
        
    );
}

export default Settings;
