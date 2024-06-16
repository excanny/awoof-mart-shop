import axiosInstance from '../axiosSetup';

export const get = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error making GET request:', error.response.status, error.response.data);
      throw error.response.data;  // Or handle it in another way as per your requirement
    } else if (error.request) {
      console.error('Error making GET request:', error.request);
      throw new Error('Network error or no response received');
    } else {
      console.error('Error making GET request:', error.message);
      throw new Error('Unexpected error occurred');
    }
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error making POST request:', error.response.status, error.response.data);
      throw error.response.data;  // Or handle it in another way as per your requirement
    } else if (error.request) {
      console.error('Error making POST request:', error.request);
      throw new Error('Network error or no response received');
    } else {
      console.error('Error making POST request:', error.message);
      throw new Error('Unexpected error occurred');
    }
  }
};
