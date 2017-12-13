import {host, restApiRoot, port} from '~/server/config.json';
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://' + host + ':' + port + restApiRoot,
});

http.setToken = token => {
  http.defaults.headers.common['Authorization'] = token;
};

http.removeToken = () => {
  delete http.defaults.headers.common.Authorization;
};

http.find = (endpoint, filter) => http.get(endpoint, {params: {filter}});

const interceptErrors = err => {
  try {
    err = Object.assign(new Error(), err.response.data.error);
  } catch (e) {
    // Will return err if something goes wrong
  }
  return Promise.reject(err);
};
const interceptResponse = res => {
  try {
    return res.data;
  } catch (e) {
    return res;
  }
};
http.interceptors.response.use(interceptResponse, interceptErrors);

export default http;

// Documentation: https://github.com/axios/axios
