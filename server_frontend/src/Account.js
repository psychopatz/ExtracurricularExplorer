import React, { useEffect, useState } from 'react';
import { Box, TextField , Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';
import BarComponent from './component/BarComponent';
import callApi from './hooks/callApi';
import UploadImageBtn from './component/UploadImageBtn';
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

const Account = () => {
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
    const [userPhoto, setUserPhoto] = useState({
                      img: REACT_APP_BACKEND_URL+'/image/fileSystem/' + userData.profilePicture,
                      title: userData.firstName+" Profile"
                  })
   console.log("UserPhoto: ",userPhoto)
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


//Upload Photo
  const handleUploadComplete = (responseData) => {
      console.log(responseData)
      let newData = {...userData};
      console.log("NewData: ",newData)
      newData.profilePicture = responseData.replace("file uploaded successfully : ","")
      setUserInfo(newData)
      updateUser()

    };


    return (  
        <>
          <BarComponent/>
          
                <Box sx={{backgroundColor: "#dfe05c"}}>
                  {userData && (
                <>
                <AccountText
                align='center'

                >{userData.firstName}'s Profile
                </AccountText>

                <PhotoDisplayer 
                  photos={userPhoto}
                  placeholderType= {userData.gender}
                  size={{ xs: 22, sm: 16, md: 13 }}
                  height = "1000px"
                  />
                <AccountCanvas>
                
                <AccountContent>
                  <AccountField
                    disabled
                    label="First Name:"
                    defaultValue={userData.firstName}
                  />
                  <AccountField
                    disabled
                    label="Last Name:"
                    defaultValue={userData.lastName}
                  />
                  <AccountField
                    disabled
                    label="Gender:"
                    defaultValue={userData.gender}
                  />
                </AccountContent>
                <AccountContent>
                  <AccountField
                    disabled
                    label="Email:"
                    defaultValue={userData.email}
                  />
                  <AccountField
                    disabled
                    label="School ID:"
                    defaultValue={userData.schoolId}
                  />
                  <AccountField
                    disabled
                    label="Department:"
                    defaultValue={userData.department}
                  />

                </AccountContent>

                <AccountContent>
                  <AccountField
                    disabled
                    label="Date Joined:"
                    defaultValue={userData.dateJoined}
                  />
                  </AccountContent>
               
                </AccountCanvas>

                </>)
                  
                }
                <AccountContent>
                     <UploadImageBtn onUploadComplete={handleUploadComplete}/>
                  </AccountContent>
                </Box>
          
          <BarComponent/>
          

        
          
          
        </>
        
    );
}

export default Account;
