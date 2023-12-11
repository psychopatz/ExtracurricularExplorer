import BoxContainer from "./component/BoxContainer";
import { Box, Button } from "@mui/material";
import useGet from "./hooks/useGet";
import SetOption from "./util/SetOption";

const About = () => {
    document.title =  'About';

    const {content, isPending, error} = useGet("/data/get/about");
    
    return ( 
        <>
        <BoxContainer>
            <h1 className="pageName">About</h1>
        </BoxContainer>
        <Box>
            <p>{content.type}</p>
            <p>{content.content}</p>

        </Box>
        
        
            
        </>

    
     );
}
 
export default About;