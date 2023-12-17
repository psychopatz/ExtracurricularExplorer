import BoxContainer from "./component/BoxContainer";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import BarComponent from "./component/BarComponent";


const photoStyles = {
  width: "200px",
  height: "auto"
}

const About = () => {
    document.title =  'About';
    const { REACT_APP_BACKEND_URL } = process.env;
    const itemData = [
  {
    img: REACT_APP_BACKEND_URL +'/image/fileSystem/charles.jpg',
    title: "Charles Dominic Hordista",
  },
  {
    img: REACT_APP_BACKEND_URL +'/image/fileSystem/patrick.png',
    title: "Patrick Oliver Bustamante",
  },
  {
    img: REACT_APP_BACKEND_URL +'/image/fileSystem/kent.png',
    title: "Kent William Villahermosa",
  }]
   

const AboutContent = styled(Box)(() =>({
        height: 400,
        width: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
}))
const AboutCanvas = styled(Box)(() =>({
        height: 400,
        width: "auto",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10

}))

const ImgPlaceholder = styled(Box)(() =>({
    width: "auto",
    height: "300px",
    borderRadius: 20,

        
}))

const AboutName = styled(Typography)(() =>({
    marginTop: "5%",
    fontWeight: "800",
    

}))
const AboutTitle = styled(Typography)(() =>({
    fontSize: 40,
    fontWeight: "800",
    
    

}))
const AboutInfo = styled(Typography)(() =>({
    fontSize: 30,
    
    

}))

console.log(itemData[1].img)
    const size = { height:"300", width:"auto"}

    

    
    return ( 
        <>
        <BoxContainer>
            <h1 className="pageName">About</h1>
        </BoxContainer>
        <BarComponent/>
        <AboutTitle 
        align = "center"
        >Extracuricular Explorer Creators
        </AboutTitle>  
        
        <AboutCanvas>
          {itemData.map((item) => (
                <AboutContent>
                    <ImgPlaceholder
                    component="img"
                    src={item.img}
                    />
                    <AboutName 
                    align = "center">
                      {item.title}</AboutName>
                </AboutContent>
          ))}
        </AboutCanvas>
        <BarComponent/>
        <BoxContainer 
        size= {size} >
        <AboutTitle align="center"> We are proud to present to you our most innovative project yet ever produced!</AboutTitle>
        <AboutInfo>Our app, Extracurricular Explorer, is designed to enhance the information-gathering process for CIT Students, Parents, Teachers, and Staff. </AboutInfo>
        <AboutInfo>By leveraging the power of Machine Learning, the app streamlines the distribution of data on organizations, events, and contact details. </AboutInfo>
        <br/>
        <AboutInfo>The inspiration for this initiative stems from our own experiences as freshmen, where we encountered challenges due to limited information availability. </AboutInfo>
        <AboutInfo>Recognizing the busy schedules of teachers and staff during those critical times, we envisioned a solution to alleviate their burden. </AboutInfo>
        <br/>
        <AboutInfo>Extracurricular Explorer consolidates essential information into a single app, simplifying the experience for both users and school personnel, such as teachers, registrars, and CIT staff.</AboutInfo>
        </BoxContainer>
        <BarComponent/>
        
        
        
            
        </>

    
     );
}
 
export default About;