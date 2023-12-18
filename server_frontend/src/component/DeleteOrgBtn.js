import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate, useParams } from 'react-router-dom';
import IsLoggedIn from '../util/IsLoggedIn';
import callApi from '../hooks/callApi';

export default function DeleteOrgBtn() {
const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
const navigate=useNavigate()
const {id} = useParams();

const deleteUser = async () => {
          const endpoint = "/org/"+id;
          const method = 'DELETE';


          try {
            const response = await callApi(endpoint, method);

            if (response.status === 200) {
              console.log('Org Deleted Successfully:', response.data);
              navigate("/organization")
              

            } else {
              console.error('Failed to update org:', response.data);

            }
          } catch (error) {
            console.error('Error updating org:', error.message);
          }
};
  if(!IsLoggedIn()){
    return (<div></div>);
  }else{
     return (
    <Box sx={{ position: 'fixed', bottom: 20, left: 20 }}>
      <Fab
        variant="extended"
        color="primary"
        onClick={deleteUser}
        
        sx={{
          '&:hover': {
            backgroundColor: '#1976D2', // Change to the color you desire
            transform: 'scale(1.05)', // Adjust the scale factor as needed
          },
          transition: 'background-color 0.30s, transform 0.300s',
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Delete this Organization
      </Fab>
    </Box>
  );


  }
 
}
