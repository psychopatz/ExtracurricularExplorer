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
          console.log("Get requested:", url);
          response = await axios.get(url);
          break;
        case 'POST':
          console.log("Post ingested:", body);
          response = await axios.post(url, body);
          break;
        case 'PUT':
          console.log("Put ingested:", body);
          response = await axios.put(url, body);
          break;
        case 'DELETE':
          console.log("Delete requested:", url);
          response = await axios.delete(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setData(response);
      setError(null);
      console.log("API Success:", response.data);
    } catch (error) {
      setData(null);
      setError(error);
      console.log("Api Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApiFetch;
