import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-final-6sqg.onrender.com', // Set your base URL here
});

export default instance;
