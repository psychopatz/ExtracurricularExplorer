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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const isPicPresent = false;
  const photoUrl = "http://127.0.0.1:8080/image/fileSystem/5b4b2fdd-24d7-4168-a4ff-5adb696a64eb.jpg"

  if(!IsLoggedIn()){
    return(
        <div></div>
    );

  }else{
    return (
    <Stack direction="row" spacing={2}>
      <Box display="flex">
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sta
        >
          Dashboard
        </Button>
        { isPicPresent ? <Avatar src={photoUrl}/> : (<Avatar>T</Avatar>)}
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
                    <MenuItem>Welcome {window.localStorage.getItem("user")}</MenuItem>
                    <MenuItem onClick={userAccount}>Profile</MenuItem>
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
