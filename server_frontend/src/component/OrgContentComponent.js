import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import callApi from "../hooks/callApi";
import ColoredBarComponent from "./ColoredBarComponent";
import DeleteOrgBtn from "./DeleteOrgBtn";
import PhotoDisplayer from "./PhotosDisplayer";

const screenWidth = window.innerWidth * 0.5;
const screenHeight = window.innerHeight * 0.5;

const OrgBox = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

}))
const ImgPlaceholder = styled(Box)(() =>({
    width: "auto",
    height: {screenHeight},
        
}))

const OrgTitle = styled(Typography)(()=>(()=> ({
    fontSize: 30,
    fontWeight: 800,
    whiteSpace: "pre"
})))
const SignupButton = styled(Button)(() =>({
    paddingLeft:"10%",
    paddingRight:"10%",
    fontWeight:800,
        
}))

const OrgProcess = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

}))
const OrgCanvasProcess = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',


}))

const OrgProcessTitle = styled(Typography)(()=>(()=> ({
    fontSize: 50,
    fontWeight: 800,
    color: "white"

})))

const OrgProcessContent = styled(Typography)(()=>(()=> ({
    fontSize: 25,
    color: "white",
    margin: 50,
    whiteSpace: "pre"
})))

const OrgContentComponent = () => {
    const [orgData,setOrgData] = useState(null)
    const [orgPhotos,setOrgPhotos] = useState([])
    
    // private int id;
    // private int orgID;
    // private String orgDetails;
    // private String orgRegisterLink;
    // private String orgBanner;
    // private Collection<String> orgPhotos;
    console.log("Org Component: ",orgData)
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    const {id} = useParams();


    const extractPhoto = () => {
        let tempData = []
        let items = orgData.orgPhotos.split(",")
        console.log("Items: ",items)
        items.map((item) => (tempData.push(
            {img: REACT_APP_BACKEND_URL+"/image/fileSystem/"+item,
            title: item
        })))
        setOrgPhotos(tempData)
        console.log("Photo Items: ", tempData)
        
    }

    const fetchData = async () => {
        const endpoint = "/org/"+id; 
        try {
          const response = await callApi(endpoint, 'GET');
          setOrgData(response.data)
          console.log("Response: ",response)
          

          console.log('Server Data:', orgData);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
  };
  

    useEffect(() => {
        fetchData()
        

    }, []);

    useEffect(() => {
        if(orgData){
            extractPhoto()

        }
        

    }, [orgData]);
    



    

    console.log(orgPhotos)

    
    // const orgData = {
    //     orgDetails: "TO BE A PREMIER COLLEGE OF NURSING AND TO EDUCATE AND EMPOWER\nA DIVERSE POPULATION OF NURSE LEADERS",
    //     orgRegisterLink: "https://forms.microsoft.com/Pages/ShareFormPage.aspx?id=v4j5cvGGr0GRqy180BHbR5rJw75GAkhJr6UOYlwk6LBURjJCTUVHRDVCUUZQSk8xOTZTMEhYSEVJSSQlQCN0PWcu&sharetoken=jvdv85oD4twB3kr6ha7q",
    //     orgBanner: REACT_APP_BACKEND_URL+"/image/fileSystem/charles.jpg",
    //     orgPhotos: [{
    //                 img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //                 title: 'Camera',
    //                 },
    //                 {
    //                 img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //                 title: 'Coffee',
    //                 },
    //                 {
    //                 img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //                 title: 'Hats',
    //                 },
    //                 {
    //                 img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //                 title: 'Camera',
    //                 },
    //                 {
    //                 img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //                 title: 'Coffee',
    //                 },
    //                 {
    //                 img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //                 title: 'Hats',
    //                 }
    //                 ]
    // }



    return (
        <>
        {orgData && (
            <OrgBox>
            <ImgPlaceholder 
                component="img"
                alt="testIcon"
                src={REACT_APP_BACKEND_URL+"/image/fileSystem/"+orgData.orgBanner}
            />
            <OrgTitle
            align="center"
            >{orgData.orgDetails}
            </OrgTitle>

           
            <PhotoDisplayer 
                photos = {orgPhotos}
            />
            

            <SignupButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={()=>{window.location.replace(orgData.orgRegisterLink)}}
            >
                    Register Now!
            </SignupButton>

            <ColoredBarComponent color= "#830404" height="200">
                    <OrgProcessTitle
                    align="center"
                    >Registration Process
                    </OrgProcessTitle>
                
                <OrgCanvasProcess >
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"1\n Submit Your Application"}
                        </OrgProcessContent>

                    </OrgProcess>
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"2\n The Committee will contact you"}
                        </OrgProcessContent>

                    </OrgProcess>
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"3\n Accepted Applicants will be contact you through email"}
                        </OrgProcessContent>
                    </OrgProcess>

                </OrgCanvasProcess>  
            </ColoredBarComponent>

            <ColoredBarComponent color= "#F2B20E" height="200">
                    <OrgProcessTitle
                    align="center"
                    >Recruitment Fee
                    </OrgProcessTitle>
                
                <OrgCanvasProcess >
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"Regular: PHP 100"}
                        </OrgProcessContent>

                    </OrgProcess>
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"Scholar: PHP 0"}
                        </OrgProcessContent>

                    </OrgProcess>
                    <OrgProcess>
                        <OrgProcessContent
                        align="center"
                        >{"Returnee PHP 50"}
                        </OrgProcessContent>
                    </OrgProcess>

                </OrgCanvasProcess>  
                <DeleteOrgBtn />
            </ColoredBarComponent>
        </OrgBox>
        )}
        </>
        
      );
}
 
export default OrgContentComponent;