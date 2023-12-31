// Import necessary modules
import React, { useState } from 'react';
import Modal from 'react-modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import imagePlaceholder from '../resources/img/imagePlaceholder.jpeg';
import malePlaceholder from '../resources/img/malePlaceholder.png';
import femalePlaceholder from '../resources/img/femalePlaceholder.png';



const PhotoDisplayer = ({ photos, placeholderType = "default", size = { xs: 12, sm: 6, md: 4 } }, height = "auto") => {
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
  let placeholder = placeholderType;

  if(placeholder == "Male"){
      placeholder = malePlaceholder;}
  else if(placeholder == "Female"){
    placeholder = femalePlaceholder;
  }else {
    placeholder = imagePlaceholder;
  }


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer', // Add cursor pointer to indicate it's clickable
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: {height},
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
 
            <StyledPaper onClick={() => openFullScreen(photo.img)}>
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
