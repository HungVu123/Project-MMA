import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://192.168.137.1:4000/api/v1', // Thay đổi URL và cổng tương ứng với API của bạn
=======
  baseURL: 'http://192.168.1.5:4000/api/v1', // Thay đổi URL và cổng tương ứng với API của bạn
>>>>>>> 217db56c8a8eeba6ca59ac6a03682434af78c3d9
});

export const fetchProductBirds = async () => {
  try {
    const response = await api.get(
      `${api.defaults.baseURL}/products?category=Birds`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export const fetchProductCages = async () => {
  try {
    const response = await api.get(
      `${api.defaults.baseURL}/products?category=Cages`
    );
    // console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export const fetchProductSuplements = async () => {
  try {
    const response = await api.get(
      `${api.defaults.baseURL}/products?category=Supplements`
    );
    // console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export const searchProduct = async (keyword) => {
  try {
    const response = await api.get(`${api.defaults.baseURL}/products`, {
      params: {
        keyword: keyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching product:', error);
    throw error;
  }
};
