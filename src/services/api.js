// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const api = axios.create({
  baseURL: `https://manager.dsplay.tv/project/createChildAccount/${process.env.REACT_APP_API_KEY}`,
});

export default api;
