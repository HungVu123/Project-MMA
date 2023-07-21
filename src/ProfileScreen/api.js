import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.5:4000/api/v1',
});

export const logout = async () => {
  try {
    const response = await api.get(`${api.defaults.baseURL}/logout`);
    // console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
