import { Box,styled } from "@mui/material";


const TitleBox = styled(Box)(({theme}) =>({
    borderTop: 60,
    borderBottom: 600,
    borderColor: theme.palette.primary.main,
    height: '130px',
    width: 'auto',
    backgroundColor: theme.palette.secondary.main,
    
}))

const BoxContainer = ({children}) => {
    
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