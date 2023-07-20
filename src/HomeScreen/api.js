import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.15:4000/api/v1', // Thay đổi URL và cổng tương ứng với API của bạn
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
