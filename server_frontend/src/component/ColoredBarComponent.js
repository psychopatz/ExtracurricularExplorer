import { Box,styled } from "@mui/material";




const ColoredBarComponent = ({children, color='red',height= '130px'}) => {
  
  const TitleBox = styled(Box)(() =>({
    height: {height},
    width: "auto",
    backgroundColor: color,
    
}))
    
    return ( 
        <TitleBox>
            {children}
        </TitleBox>

     );
}
 
export default ColoredBarComponent;