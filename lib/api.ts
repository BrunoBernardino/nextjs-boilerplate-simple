import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: `${(process && process.env && process.env.API_URL) || ''}/api/v0/`,
  timeout: 30000,
});

export default api;
