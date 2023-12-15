import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';
import BarComponent from './component/BarComponent';
import callApi from './hooks/callApi';
import UploadImageBtn from './component/UploadImageBtn';
import { useNavigate } from 'react-router-dom';


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
          
          <Box>
            <BarComponent/>
                {userData && (
                <>
                <PhotoDisplayer photos={userPhoto}
                  placeholderType= {userData.gender}
                  size={{ xs: 12, sm: 6, md: 3 }}
                  />
                <Typography>Moderator Name: {userData.firstName} {userData.lastName}</Typography>
                <Typography>Gender: {userData.gender}</Typography>
                <Typography>Email: {userData.email}</Typography>
                <Typography>School ID: {userData.schoolId}</Typography>
                <Typography>Department: {userData.department}</Typography>
                <Typography>Date Joined: {userData.dateJoined}</Typography>
                <UploadImageBtn onUploadComplete={handleUploadComplete}/>

                </>)
                  
                }
          
          </Box>
          <BarComponent/>
          

        
          
          
        </>
        
    );
}

export default Account;
