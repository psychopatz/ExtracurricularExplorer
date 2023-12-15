import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import IsLoggedIn from '../util/IsLoggedIn';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const NavDropdown = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const NavDropdown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const userLogOut =(e) =>{
    handleClose(e)
    navigate("/logout")
  }

  const userAccount =(e)=>{
    handleClose(e)
    navigate("/account");
  }

  const userSettings =(e)=>{
    handleClose(e)
    navigate("/account/settings");
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  // I check if ang photo ky valid
    let userData = window.JSON.parse(localStorage.getItem('loginSession'))
    if(!userData){
      userData = {
          "id": -2,
          "firstName": "Regular",
          "lastName": "User",
          "email": "",
          "password": "",
          "gender": "",
          "schoolId": "",
          "department": "",
          "dateJoined": ""
        }

    }else{

    }
    const photoUrl = REACT_APP_BACKEND_URL+"/image/fileSystem/"+userData.profilePicture;
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
    fetch(photoUrl).then(res => {
      setIsValid(res.status === 200);
    });

  }, []);

  if(!IsLoggedIn()){
    return(
        <div></div>
    );

  }else{
    return (
    <Stack direction="row" spacing={20}>
      <Box display="flex">
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Dashboard
        </Button>
        { isValid ? <Avatar src={photoUrl}/> : (<Avatar>{userData.firstName[0]}{userData.lastName[0]}</Avatar>)}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={NavDropdown}
                  >
                    <MenuItem onClick={userAccount}>Profile</MenuItem>
                    <MenuItem onClick={userSettings}>Settings</MenuItem>
                    <MenuItem onClick={userLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Stack>
  );
};
  }

export default NavDropdown;
