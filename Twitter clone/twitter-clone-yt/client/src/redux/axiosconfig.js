import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://deploy-mern-api.vercel.app/', // Set your base URL here
});

export default instance;