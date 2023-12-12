import axios from 'axios';
import SetOption from '../util/SetOption';

const callApi = async (endpoint, method = 'GET', body = null) => {
  const url = SetOption('url') + endpoint;

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

    return response;
  } catch (error) {
    throw error;
  }
};

export default callApi;
