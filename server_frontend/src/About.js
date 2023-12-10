import BoxContainer from "./component/BoxContainer";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";

const About = () => {
    const baseURL = "http://127.0.0.1:8080";
    const url = baseURL+"/data/get/about";

    const [content, setContent] = useState([]);
    const [isPending,setIsPending] = useState(true);

    useEffect(() =>
    {
        axios.get(url)
        .then(res => 
            setContent(res.data)
            )
        .catch(err => console.log(err));

    },[])
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