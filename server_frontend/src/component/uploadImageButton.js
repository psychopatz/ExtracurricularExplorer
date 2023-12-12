import React, { useState } from 'react';
import useApiFetch from './useApiFetch';

const uploadImageButton = ({ onSuccess, onError, buttonText }) => {
  const endpoint = "/image/fileSystem" //endpoint
  const [selectedFile, setSelectedFile] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonError, setButtonError] = useState(null);
  const [buttonData, setButtonData] = useState(null);

  const { fetchData } = useApiFetch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClick = async () => {
    setButtonLoading(true);
    setButtonError(null);
    setButtonData(null);

    try {
      if (!selectedFile) {
        throw new Error('Please select an image');
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetchData(endpoint, 'POST', formData);
      setButtonData(response);
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      setButtonError(error);
      if (onError) {
        onError(error);
      }
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleClick} disabled={buttonLoading}>
        {buttonLoading ? 'Uploading...' : buttonText}
      </button>

      {buttonError && <p>Error: {buttonError.message}</p>}
      {buttonData && <pre>Data: {JSON.stringify(buttonData, null, 2)}</pre>}
    </div>
  );
};

export default uploadImageButton;
