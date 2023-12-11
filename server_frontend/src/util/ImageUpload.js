import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [resp,setResp] = useState("")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleUpload = async () => {
    try {
      setIsUploading(true);

      let formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('http://127.0.0.1:8080/image/fileSystem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      console.log('Image uploaded successfully:', response.data);
      setResp(response);
      console.log(resp)
      console.log(response);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <LinearProgress variant="determinate" value={uploadProgress} sx={{ width: 'auto' }} />
      <Button
        variant="contained"
        component="label"
        onClick={handleUpload}
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Upload File'}
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      <p>Selected file: {fileName}</p>
      <p>Uploaded File: {()=>{
        if(resp){
          String(resp.data).replace("Uploaded File: file uploaded successfully : ","")
        }
      }}</p>
    </div>
  );
};

export default ImageUpload;
