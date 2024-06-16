// import axios from 'axios';
// import { isTokenExpired } from './utils/auth';
// import { useNavigate } from 'react-router-dom';
// const axiosInstance = axios.create({
//   baseURL,
//   // You can add other default configurations here if needed
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem('token');
//     if (isTokenExpired(token)) {
//       localStorage.removeItem('token');
//       const navigate = useNavigate(); // Import useNavigate from react-router-dom
//       navigate('/login'); // Use React Router navigation instead of window.location.href
//       return Promise.reject(new Error('Token expired'));
//     }
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('token');
//       const navigate = useNavigate(); // Import useNavigate from react-router-dom
//       navigate('/login'); // Use React Router navigation instead of window.location.href
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from 'axios';

const baseURL = 'https://awoofmart.ng/awoofmartapi/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
