import axios from "axios";
const BACKEND_URL = process.env.BACKEND_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});
// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    config.headers = {
      // Authorization: `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
  async function (response) {
    // Do something with response data
    const result = response.data;
    return result;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosInstance;
