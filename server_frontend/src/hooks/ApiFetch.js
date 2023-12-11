import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiFetch = ({ url, method = 'GET', data = null, children }) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method,
          url,
          data,
        });

        setResponseData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData(); // Call the function when the component mounts

    // If you need to clean up (e.g., cancel the request) when the component unmounts, return a cleanup function
    return () => {
      // Your cleanup logic here, if needed
    };
  }, [url, method, data]); // Re-run effect when url, method, or data change

  return (
    <div>
      {children({ responseData, loading })}
    </div>
  );
};

export default ApiFetch;
