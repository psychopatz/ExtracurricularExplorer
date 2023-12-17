import { Box,styled } from "@mui/material";




const BoxContainer = ({children, size = {height: '130px',width: 'auto',}}) => {
  const TitleBox = styled(Box)(({theme}) =>({
    borderTop: 60,
    borderBottom: 600,
    borderColor: theme.palette.primary.main,
    height: size.height,
    width: size.width,
    backgroundColor: theme.palette.secondary.main,

    
}))
    
    return ( 
        <TitleBox  sx={{
        borderTop: 4,
        borderBottom: 10,
        borderColor: 'primary.main',
      }}>

        {children}

        </TitleBox>

     );
}
 
export default BoxContainer;