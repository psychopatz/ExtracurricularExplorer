import styled from "@emotion/styled";
import { Button } from "@mui/base";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const OrgBox = styled(Box)(() =>({
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '40%',
    backgroundColor: "#DDDEDE",
    borderRadius: 20,
}))

const OrgAcronym = styled(Typography)(() =>({
    marginTop: "5%",
    fontWeight: "800"

}))

const OrgDesc = styled(Typography)(() =>({

}))

const ImgPlaceholder = styled(Box)(() =>({
    width: "auto",
    height: "80%",
    marginRight: "5%",
    marginTop: "2%",
    borderRadius: 20,

        
}))

const OrgButton = styled(Button)(({theme}) =>({
    width: 100,
    height: "30%",
    left:"30%",
    backgroundColor: theme.palette.primary.main,
    color: "#ffff",
    borderRadius: 20,

        
}))

const OrgMainComponent = ({org}) => {
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    const navigate = useNavigate()
    
    // private int id;
    // private int orgDataID;
    // private String name;
    // private String acronym;
    // private String logo;
    console.log("OrgMainData: ",org)
    
    
    return ( 

        <OrgBox>
            <ImgPlaceholder
            component="img"
            alt="orgIcon" 
            src={REACT_APP_BACKEND_URL+"/image/fileSystem/"+org.logo}
            />
            <Box sx={{
                height: "auto",
                width: "auto"
            }}>
                <OrgAcronym>{org.acronym}</OrgAcronym>
                <OrgDesc>{org.name}</OrgDesc>
                <OrgButton
                variant="contained"
                onClick={()=>{navigate("/organization/data/"+org.id)}}
                >
                    READ MORE

                </OrgButton>
            </Box>

        </OrgBox>
     );
}
 
export default OrgMainComponent;