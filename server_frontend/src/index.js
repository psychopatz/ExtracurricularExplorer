import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider,createTheme } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette:{
    primary:{
      main:"#830404"
    },
    secondary:{
      main:"#F2B20E"
    }
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

