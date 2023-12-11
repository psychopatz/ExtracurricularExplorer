import React, { useEffect, useState } from 'react';
import ApiFetch from "./hooks/ApiFetch";
import SetOption from "./util/SetOption";
import useLocalStorage from "./hooks/useLocalStorage";
import UploadBtn from "./component/UploadBtn";
import { Box, Typography } from "@mui/material";
import PhotoDisplayer from './component/PhotosDisplayer';

const Account = () => {
    const [storedValue, setStoredValue, clearStoredValue] = useLocalStorage('loginSession', '1');
    const currentUrl = SetOption("url")+"/account/user/"+ storedValue
    const [uploadError, setUploadError] = useState(null);
    const [responseData, setResponseData] = useState('Empty');
    const [apiData, setApiData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(
        {
            img: 'http://127.0.0.1:8080/image/fileSystem/',
            title: 'User Profile'
        })

    const handleUploadError = (error) => {
      setUploadError(error);
    };

    const handleResponseData = (data) => {
      setResponseData(data);
    };

    const handleApiData = (data) => {
      setApiData(data);
      setLoading(false);
    };

    useEffect(() => {
        setUserProfile(
            {
            img: 'http://127.0.0.1:8080/image/fileSystem/' + apiData.profilePicture,
            title: apiData.fName+" Profile"
            })
      console.log(apiData);
    }, [apiData]);


    return (  
        <>
          <ApiFetch url={currentUrl} method="GET" onDataFetched={handleApiData}>
            {({ responseData, loading }) => (
              <div>
                {/* Optional: Render loading state or other UI while data is being fetched */}
              </div>
            )}
          </ApiFetch>
          <Box>
            {loading && <PhotoDisplayer photos={{userProfile}} />}
          </Box>

          <UploadBtn
            onUploadError={handleUploadError}
            onResponseData={handleResponseData}
          />
          <p>Upload Error: {uploadError}</p>
          <p>Response Data: {responseData}</p>
          
        </>
        
    );
}

export default Account;
