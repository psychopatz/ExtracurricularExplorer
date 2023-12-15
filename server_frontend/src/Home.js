import BoxContainer from "./component/BoxContainer";
import PhotoDisplayer from "./component/PhotosDisplayer";



const Home = () => {
    document.title =  'Extracuricular Explorer';
    const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
    console.log({ REACT_APP_APP_URL });
    console.log({ REACT_APP_BACKEND_URL});
    console.log({ REACT_APP_LLM_URL });
    
    

    const itemData = [
  {
    img: 'http://127.0.0.1:8080/image/fileSystem/IMG_20170302_170443.jpg',
    title: 'Breakfast',
  },
  {
    img: 'http://127.0.0.1:8080/image/fileSystem/org.png',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


    return ( 
        <>
        <BoxContainer>
            <h1 className="pageName">Student Organization Explorer</h1>
        </BoxContainer>
        <PhotoDisplayer photos={itemData} />
        </>
     );
}
 
export default Home;