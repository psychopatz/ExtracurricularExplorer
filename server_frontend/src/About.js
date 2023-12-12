import BoxContainer from "./component/BoxContainer";
import { Box, Button, Typography } from "@mui/material";
import useApiFetch from "./hooks/useApiFetch";
import { useEffect } from "react";
import PhotoDisplayer from "./component/PhotosDisplayer";

const About = () => {
    document.title =  'About';
    
    const { data, loading, error, fetchData } = useApiFetch();
    useEffect(() => {
        fetchData('/data/get/about');
    }, []);

    console.log(data)
    console.log(loading)
    console.log(error)


    
    return ( 
        <>
        <BoxContainer>
            <h1 className="pageName">About</h1>
        </BoxContainer>
        <Box>
            
            

        </Box>
        
        
            
        </>

    
     );
}
 
export default About;