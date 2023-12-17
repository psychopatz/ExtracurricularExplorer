import React, { useState } from 'react';
import callApi from '../hooks/callApi'; 

const UploadImageBtn = ({ onUploadComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      // Check if a file is selected
      if (!selectedFile) {
        console.error('No file selected for upload');
        return;
      }

      // Create a FormData object to handle file upload
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Make the API call using callApi
      const response = await callApi('/image/fileSystem', 'POST', formData);

      // Notify the parent component about the upload completion
      onUploadComplete(response.data);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImageBtn;