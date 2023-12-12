// Import necessary dependencies
import { useState } from 'react';
import axios from 'axios';
import SetOption from "../util/SetOption";


const useApiFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, method = 'GET', body = null) => {
    let url = SetOption("url") + endpoint;
    setLoading(true);

    try {
      let response;
      switch (method.toUpperCase()) {
        case 'GET':
          response = await axios.get(url);
          break;
        case 'POST':
          response = await axios.post(url, body);
          break;
        case 'PUT':
          response = await axios.put(url, body);
          break;
        case 'DELETE':
          response = await axios.delete(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setData(response.data);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApiFetch;
