// PhotoDisplayer.js

import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import imagePlaceholder from '../resources/img/imagePlaceholder.jpeg'
import malePlaceholder from '../resources/img/malePlaceholder.png'
import femalePlaceholder from '../resources/img/femalePlaceholder.png'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});


const PhotoDisplayer = ({ photos, type = "default", isCustom = false, size = { xs: 12, sm: 6, md: 4 } }) => {
  
  const calculateSize = (numPhotos) => {
  if(isCustom){
    return size;
  } else if (numPhotos === 1) {
    return { xs: 12, sm: 12, md: 12 };
  } else if (numPhotos <= 2) {
    return { xs: 12, sm: 6, md: 6 };
  } else if (numPhotos <= 4) {
    return { xs: 12, sm: 6, md: 4 };
  } else {
    return { xs: 12, sm: 6, md: 3 };
  }
  
};

  const sizeProps = calculateSize(Array.isArray(photos) ? photos.length : 1);
  let placeholderType = ""

  
  
  switch(type){
    case "male":
        placeholderType = malePlaceholder;
        break;
    case "female":
        placeholderType = femalePlaceholder;
        break;
    default:
        placeholderType = imagePlaceholder;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {(Array.isArray(photos) ? photos : [photos]).map((photo, index) => (
          <Grid item {...sizeProps} key={index}>
            <StyledPaper>
              <StyledImage
                src={photo.img || placeholderType}
                alt={photo.title}
                onError={(e) => {
                  e.target.src = placeholderType;
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
