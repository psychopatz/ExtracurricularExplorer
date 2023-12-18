import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxContainer from "./component/BoxContainer";
import InputFieldComponent from "./component/InputFieldComponent";
import OrgContentComponent from "./component/OrgContentComponent";
import OrgMainComponent from "./component/OrgMainComponent";
import UploadImageBtn from "./component/UploadImageBtn";
import callApi from "./hooks/callApi";


const OrgBox = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,


}))

const OrgTextField ={
    
    position:"relative",
    variant : "filled",
    marginBottom: "1%",
    marginTop: "1%",
    input: {
                background: "white"
            }
        
}

const SignupButton = styled(Button)(() =>({
    paddingLeft:"10%",
    paddingRight:"10%",
    fontWeight:800,
    height: 30,
    width: 40
    
    
        
}))

const ImagePlaceholder = styled(Box)(() =>({
    width: "auto%",
    height: 100,
    
    
        
}))

 
const OrganizationNew = () => {
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    const navigate = useNavigate()
    let [picture,setPicture] = useState("")
    const [data,setData] =useState({
        name: "",
        acronym: "",
        logo: "",
        orgDetails: "",
        orgRegisterLink: "",
        orgBanner: "",
        orgPhotos: ""
    })

    

    const handleInput = (e)=>{
        console.log("HandleInput: "+ e)
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
        console.log(data)
        console.log(newData)

    };

       

    const handleUploadComplete = (responseData) => {
      console.log(responseData)
      setPicture(responseData.replace("file uploaded successfully : ",""))

    

    };

     const handleSubmit = async (event) => {
        event.preventDefault();
        let endpoint = "/org/add";
        const method="POST";
        let userData = 
        {
            name: data.name,
            acronym: data.acronym,
            logo: data.logo,
            orgDetails: data.orgDetails,
            orgRegisterLink: data.orgRegisterLink,
            orgBanner: data.orgBanner,
            orgPhotos: data.orgPhotos
        }
        try {
            const response = await callApi(endpoint, method, userData);

            if (response.status === 200) {
               console.log("Data: "+response.data)
               const apiResponse = await callApi(endpoint, 'POST', data);
               console.log('API ResponseEz:', apiResponse);
               console.log("UserData: "+userData)
               navigate('/organization');
               

            }else {
              console.error('Failed to update user:', response.data);

            }
          } catch (error) {
            console.error('Error updating user:', error.message);
          }

        
    
  };

    document.title =  'Browse CIT Organization';
    //    private int id;
    //     private String name;
    //     private String acronym;
    //     private String logo;
    //     @Column(columnDefinition="LONGBLOB")
    //     private String orgDetails;
    //     private String orgRegisterLink;
    //     private String orgBanner;
    //     private Collection<String> orgPhotos;
    return (    
        <>
        <BoxContainer>
        <h1 className="pageName">Organization</h1>
        </BoxContainer>
        
        <OrgBox>
            <InputFieldComponent 
                name="name"
                type="text"
                label="Organization Name:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                <InputFieldComponent 
                name="acronym"
                type="text"
                label="Organization Acronym:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                <InputFieldComponent 
                name="logo"
                type="text"
                label="Organization Logo Name Link:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                
                <InputFieldComponent 
                name="orgDetails"
                type="multiline"
                label="Organization Details:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                <InputFieldComponent 
                name="orgRegisterLink"
                type="text"
                label="Register Link:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                <InputFieldComponent 
                name="orgBanner"
                type="text"
                label="Banner Name Link:"
                sx ={OrgTextField} 
                onChange={handleInput}
                />
                <InputFieldComponent 
                name="orgPhotos"
                type="multiline"
                label="Photo's Link Name:(Separate it with comma)"
                sx ={OrgTextField} 
                onChange={handleInput}
                />

                {/* Banner */}
                <SignupButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Submit
                </SignupButton>
                <Box>
                    <ImagePlaceholder component="img" src={REACT_APP_BACKEND_URL+"/image/fileSystem/"+picture}/>
                    <Typography>Copy this Filename: {picture}</Typography>
                    <UploadImageBtn onUploadComplete={handleUploadComplete}/>

                </Box>
                

                {/* orgPhotos */}
        </OrgBox>
        

        </>
    );
}
 
export default OrganizationNew;