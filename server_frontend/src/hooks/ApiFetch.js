import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiFetch = ({ url, method = 'GET', data = null, onDataFetched, children }) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const source = axios.CancelToken.source();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method,
          url,
          data,
          cancelToken: source.token,
        });

        setResponseData(response.data);
        setLoading(false);

        // Call the callback function with the fetched data
        if (onDataFetched) {
          onDataFetched(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error:', error);
          setLoading(false);
        }
      }
    };

    fetchData(); // Call the function when the component mounts

    // Cleanup function: Cancel the request when the component unmounts
    return () => {
      source.cancel('Request canceled due to component unmount');
    };
  }, [url, method, data, onDataFetched]); // Re-run effect when url, method, data, or onDataFetched change

  return (
    <div>
      {children({ responseData, loading })}
    </div>
  );
};

export default ApiFetch;
