import axios from 'axios';

const BASE_URL = 'https://schnotes-hu9wy.ondigitalocean.app'

export const getRequest = async (url: string, data: object) => {
  try {

    const response = await axios.get(`${BASE_URL}${url}`, {
      params: {...data}
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

export const postRequest = async (url: string, data: object) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    }
    const response = await axios.post(`${BASE_URL}${url}`, data, { headers });
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};
