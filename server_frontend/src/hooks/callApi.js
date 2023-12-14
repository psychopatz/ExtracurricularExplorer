import axios from 'axios';

const callApi = async (endpoint, method = 'GET', body = null) => {
  const { REACT_APP_APP_URL,REACT_APP_BACKEND_URL,REACT_APP_LLM_URL } = process.env;
  const url = REACT_APP_BACKEND_URL + endpoint;

  try {
    let response;
    switch (method.toUpperCase()) {
      case 'GET':
        response = await axios.get(url);
        break;
      case 'POST':
        if (body instanceof FormData) {
          // If the body is a FormData object, it's a file upload
          response = await axios.post(url, body, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } else {
          // Otherwise, it's a regular POST request
          response = await axios.post(url, body);
        }
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

    return response;
  } catch (error) {
    throw error;
  }
};

export default callApi;
