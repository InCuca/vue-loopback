import { host, restApiRoot, port } from '~/server/config.json';
import axios from 'axios';

const Storage = window.localStorage;

/**
 * Add a token in the local storage
 * */
function exportTokenToLocalStorage(token) {
  if (Storage) {
    Storage.setItem('loopback-token', JSON.stringify(token));
  }
}

/**
 * Remove token from local storage
 */
function removeTokenFromLocalStorage() {
  if (Storage) {
    Storage.removeItem('loopback-token');
  }
}

function addTokenFromLocalStorage(http) {
  const token = Storage && Storage.getItem('loopback-token');
  if (token) http.setToken(JSON.parse(token), false);
}

const http = axios.create({
  baseURL: 'http://' + host + ':' + port + restApiRoot,
});

http.setToken = (token, save = true) => {
  http.token = token;
  http.defaults.headers.common['Authorization'] = token.id;
  if (save) exportTokenToLocalStorage(token);
};

http.removeToken = () => {
  delete http.defaults.headers.common.Authorization;
  removeTokenFromLocalStorage();
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

// Set storage Token in http if exists
addTokenFromLocalStorage(http);

export default http;

// Documentation: https://github.com/axios/axios
