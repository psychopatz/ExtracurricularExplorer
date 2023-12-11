import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const PhotoDisplayer = ({ photos, size = { xs: 12, sm: 6, md: 4 } }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Photo Displayer
      </Typography>
      <Grid container spacing={2}>
        {photos.map((photo, index) => (
          <Grid item xs={size.xs} sm={size.sm} md={size.md} key={index}>
            <StyledPaper>
              <StyledImage src={photo.img} alt={photo.title} />
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PhotoDisplayer;
