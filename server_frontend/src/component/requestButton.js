import React, { useState } from 'react';
import useApiFetch from '../hooks/useApiFetch';

const uploadButton = ({ url, method = 'GET', body = null, onSuccess, onError, buttonText }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonError, setButtonError] = useState(null);
  const [buttonData, setButtonData] = useState(null);

  const { fetchData } = useApiFetch();

  const handleClick = async () => {
    setButtonLoading(true);
    setButtonError(null);
    setButtonData(null);

    try {
      const response = await fetchData(url, method, body);
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
      <button onClick={handleClick} disabled={buttonLoading}>
        {buttonLoading ? 'Loading...' : buttonText}
      </button>

      {buttonError && <p>Error: {buttonError.message}</p>}
      {buttonData && <pre>Data: {JSON.stringify(buttonData, null, 2)}</pre>}
    </div>
  );
};

export default uploadButton;
