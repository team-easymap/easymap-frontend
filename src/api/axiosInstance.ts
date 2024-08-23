import axios from 'axios';

export const axiosInstance = axios.create({
  withCredentials: true,
  timeout: 6000
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 403) {
      const data = err.response.data;
      if (data && data.code === 'AF') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err.message);
  }
);
