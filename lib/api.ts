import ky from 'ky-universal';

const api = ky.create({
  credentials: 'include',
  prefixUrl: `${(process && process.env && process.env.API_URL) || ''}/api/v0/`,
  timeout: 30000,
});

export default api;
