import React, { useEffect, useState } from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import { Box, Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';
import useApiFetch from './hooks/useApiFetch';


const Account = () => {
    const [storedValue, setStoredValue, clearStoredValue] = useLocalStorage('loginSession', '-2');
    //User Data
    const { data, loading, error, fetchData } = useApiFetch();
    useEffect(() => {
        fetchData("/account/user/"+storedValue);
        
        console.log(data)
        console.log(loading)
        console.log(error)
    }, []);

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
                {data && (
                <>
                <PhotoDisplayer photos={
                  {
                      img: 'http://127.0.0.1:8080/image/fileSystem/' + data.profilePicture,
                      title: data.firstName+" Profile"
                  }} />
                <Typography>Moderator Name: {data.firstName} {data.lastName}</Typography>
                <Typography>Email: {data.email}</Typography>
                
                </>)
                  
                }
          
          </Box>
          

        
          
          
        </>
        
    );
}

export default Account;
