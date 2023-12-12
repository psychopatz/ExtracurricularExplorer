import React, { useEffect, useState } from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import { Box, Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';
import BarComponent from './component/BarComponent';


const Account = () => {
    const userData = window.JSON.parse(localStorage.getItem('loginSession'))
//User Data


//Upload Photo

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
                      img: 'http://127.0.0.1:8080/image/fileSystem/' + userData.profilePicture,
                      title: userData.firstName+" Profile"
                  }}
                  type= {userData.gender}
                  isCustom = {true}
                  size={{ xs: 12, sm: 6, md: 3 }}
                  
                  />
                <Typography>Moderator Name: {userData.firstName} {userData.lastName}</Typography>
                <Typography>Gender: {userData.gender}</Typography>
                <Typography>Email: {userData.email}</Typography>
                <Typography>School ID: {userData.schoolId}</Typography>
                <Typography>Department: {userData.department}</Typography>
                <Typography>Date Joined: {userData.dateJoined}</Typography>
                
                
                
                </>)
                  
                }
          
          </Box>
          <BarComponent/>
          

        
          
          
        </>
        
    );
}

export default Account;
