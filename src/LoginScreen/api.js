import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.5:4000/api/v1',
});

export const login = async (email, password) => {
  try {
    const response = await api.post(`${api.defaults.baseURL}/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.post(`${api.defaults.baseURL}/password/forgot`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await api.post(`${api.defaults.baseURL}/register`, {
      name: name,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
};
