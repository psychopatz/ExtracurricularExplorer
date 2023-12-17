import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import BoxContainer from "./component/BoxContainer";
import BarComponent from "./component/BarComponent";
import PhotoDisplayer from "./component/PhotosDisplayer";
import homeImg from "./resources/img/homepage.jpg";

const ImagePlaceholder = styled(Box)(() =>({
    width: "auto",
    height: "1%",
          
}))

const HomeDetails = styled(Typography)(()=>({
  fontSize: 20,
  textIndent: "2em",
  margin: "2%"
}))

const HomeCanvas = styled(Box)(()=>({
  margin: "5%"
}))



const Home = () => {
    document.title =  'Extracuricular Explorer';
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    console.log({ REACT_APP_APP_URL });
    console.log({ REACT_APP_BACKEND_URL});
    console.log({ REACT_APP_LLM_URL });

    const itemData =[
      "Welcome to the Student Organization Explorer, your gateway to a vibrant and diverse world of\ncampus life! This website is your key to unlocking a treasure trove of opportunities, events, and\ncommunities that make your university experience truly unforgettable. Whether you're a freshman eager\nto dive into the college scene or a seasoned student looking to expand your horizons, the Student\nOrganization Explorer is here to guide you on a journey of discovery and connection.",
      "On this platform, you'll find a comprehensive directory of student organizations, clubs, and\nsocieties that cater to a wide range of interests, from academic and professional pursuits to hobbies and\ncauses that matter most to you. With just a few clicks, you can explore these diverse groups, learn about\ntheir missions, and connect with like—minded peers who share your passions.",
      "This website is designed to help you navigate the rich tapestry of extracurricular activities\navailable on your campus, fostering personal growth, leadership development, and a strong sense of\ncommunity. Whether you're interested in joining a club, attending events, or even starting your own\norganization, we provide the tools and resources to make it happen.",
      "Join us on this exciting journey of exploration, discovery, and personal growth. The Student\nOrganization Explorer is your compass to campus life, helping you create unforgettable memories, forge\nlifelong friendships, and make the most of your university experience. So, without further ado, let's\nembark on this adventure together!"
    ]
    

//     const itemData = [
//   {
//     img: 'http://127.0.0.1:8080/image/fileSystem/IMG_20170302_170443.jpg',
//     title: 'Breakfast',
//   },
//   {
//     img: 'http://127.0.0.1:8080/image/fileSystem/org.png',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];


    return ( 
        <>
        <BoxContainer>
            <h1 className="pageName">Student Organization Explorer</h1>
        </BoxContainer>
        <ImagePlaceholder
        component= "img"
        src={homeImg}
        />
        {/* <PhotoDisplayer photos={itemData} /> */}
        <HomeCanvas>
        {itemData.map((item)=>(
              <Box>
                <HomeDetails 
                    variant="body1"
                    gutterBottom
                    align="justify"
                    >
                      {item}
                
              </HomeDetails>
            </Box>
            ))}
        </HomeCanvas>
        <BarComponent/>
        
        </>
     );
}
 
export default Home;