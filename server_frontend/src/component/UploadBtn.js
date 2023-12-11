import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import uploadImage from '../util/ImageUpload';

const UploadBtn = ({ onUploadError, onResponseData }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
  try {
    setIsUploading(true);

    const onUploadProgress = (progressEvent) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      setUploadProgress(percentCompleted);
    };

    console.log('Start uploading...');
    
    const responseData = await uploadImage(file, onUploadProgress);
    console.log('Response data received:', responseData);
    
    onResponseData(responseData); // Pass the data to the parent component
  } catch (error) {
    console.error('Error uploading image:', error);
    onUploadError(`Error uploading image: ${error}`); // Pass the error to the parent component
  } finally {
    console.log('Upload completed.');
    setIsUploading(false);
  }
};


  return (
    <div>
      <Button
        variant="contained"
        component="label"
        onClick={handleUpload}
        disabled={isUploading}
        >
        {isUploading ? 'Uploading...' : 'Upload File'}
        <input type="file" hidden onChange={handleFileChange} />
    </Button>

      <LinearProgress variant="determinate" value={uploadProgress} sx={{ width: 'auto' }} />
    </div>
  );
};

export default UploadBtn;
