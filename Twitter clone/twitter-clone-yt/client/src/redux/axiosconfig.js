import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitterrr.onrender.com', // Set your base URL here
});

export default instance;
