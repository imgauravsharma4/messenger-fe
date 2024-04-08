import Axios from 'axios';

import storage from 'utils/storage';
import { API_URL } from 'utils/variables';

function authRequestInterceptor(config) {
  config.headers = config.headers ?? {};
  const token = storage.getToken();
  if (token && token.accessToken) {
    config.headers.authorization = `Bearer ${token.accessToken}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}
export const axios = Axios.create({
  baseURL: API_URL,
});
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data?.result ? response.data?.result : response.data;
  },
  (error) => {
    let message = error.response?.data?.message || error.message;
    if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      (error.response.data.error?.errors || error.response.data.error?.error_params)
    ) {
      message =
        error.response.data.error?.errors.join(',') ||
        error.response.data.error?.error_params?.map((e) => e.message || e.msg)?.join(',');
    }
    // Handle Error
    // eslint-disable-next-line no-undef
    return Promise.reject({
      statusCode: error.response?.status,
      message: message,
    });
  }
);
