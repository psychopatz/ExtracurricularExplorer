import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';
import BarComponent from './component/BarComponent';
import UploadImageButton from './component/uploadImageButton';
import callApi from './hooks/callApi';


const Account = () => {
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    const userData = window.JSON.parse(localStorage.getItem('loginSession'))
//User Data


//Upload Photo
const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
  setSelectedFile(event);
  console.log("Content: ",selectedFile)
};
const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await callApi('/image/fileSystem', 'POST', formData);
      console.log('File uploaded successfully:', response.data);

     
    } catch (error) {
      // Handle error
      console.error('Error uploading file:', error);
    }
  };

//Object { id: 50, 
//firstName: "Charles", 
//lastName: "Hordista", 
//email: "Chad@cit.edu", 
//password: "12345678", 
//profilePicture: null }
    return (  
        <>
          
          <Box>
            <BarComponent/>
                {userData && (
                <>
                <PhotoDisplayer photos={
                  {
                      img: REACT_APP_BACKEND_URL+'/image/fileSystem/' + userData.profilePicture,
                      title: userData.firstName+" Profile"
                  }}
                  placeholderType= {userData.gender}
                  size={{ xs: 12, sm: 6, md: 3 }}
                  
                  />
                <Typography>Moderator Name: {userData.firstName} {userData.lastName}</Typography>
                <Typography>Gender: {userData.gender}</Typography>
                <Typography>Email: {userData.email}</Typography>
                <Typography>School ID: {userData.schoolId}</Typography>
                <Typography>Department: {userData.department}</Typography>
                <Typography>Date Joined: {userData.dateJoined}</Typography>
                <UploadImageButton onHandleFile={handleFileChange}/>
                
                
                
                
                </>)
                  
                }
          
          </Box>
          <BarComponent/>
          

        
          
          
        </>
        
    );
}

export default Account;
