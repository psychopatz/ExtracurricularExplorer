// Import necessary modules
import React, { useState } from 'react';
import Modal from 'react-modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import imagePlaceholder from '../resources/img/imagePlaceholder.jpeg';
import malePlaceholder from '../resources/img/malePlaceholder.png';
import femalePlaceholder from '../resources/img/femalePlaceholder.png';

// Define styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer', // Add cursor pointer to indicate it's clickable
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const FullScreenImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Full Screen Image Modal"
    >
      <div>
        <StyledImage src={imageUrl} alt="Full Screen Image" />
      </div>
    </Modal>
  );
};

const PhotoDisplayer = ({ photos, placeholderType = "default", size = { xs: 12, sm: 6, md: 4 } }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImageUrl, setFullScreenImageUrl] = useState('');

  const openFullScreen = (imageUrl) => {
    setFullScreenImageUrl(imageUrl);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenImageUrl('');
  };
  let placeholder = placeholderType.toLowerCase;
  console.log(placeholderType)
  if(placeholder == "male"){
      placeholder = malePlaceholder;}
  else if(placeholder === "female"){
    placeholder = femalePlaceholder;
  }else{
    placeholder = imagePlaceholder;
  }

    console.log(placeholder)

  return (
    <div>

      <FullScreenImageModal
        isOpen={isFullScreen}
        onRequestClose={closeFullScreen}
        imageUrl={fullScreenImageUrl}
      />


      <Grid container spacing={2}>
        {(Array.isArray(photos) ? photos : [photos]).map((photo, index) => (
          <Grid item {...size} key={index}>
 
            <StyledPaper onClick={() => openFullScreen(photo.img || placeholder)}>
              <StyledImage
                src={photo.img || placeholder}
                alt={photo.title}
                onError={(e) => {
                  e.target.src = placeholder;
                }}
              />
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PhotoDisplayer;
