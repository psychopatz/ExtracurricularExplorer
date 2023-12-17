import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from 'react-router-dom';
import IsLoggedIn from '../util/IsLoggedIn';

export default function NewOrgBtn() {
const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
const navigate=useNavigate()
const handleClick = () => {

    navigate("/organization/add");
  };
  if(!IsLoggedIn()){
    return (<div></div>);
  }else{
     return (
    <Box sx={{ position: 'fixed', bottom: 20, left: 20 }}>
      <Fab
        variant="extended"
        color="primary"
        onClick={handleClick}
        
        sx={{
          '&:hover': {
            backgroundColor: '#1976D2', // Change to the color you desire
            transform: 'scale(1.05)', // Adjust the scale factor as needed
          },
          transition: 'background-color 0.30s, transform 0.300s',
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Add New Organization
      </Fab>
    </Box>
  );


  }
 
}
