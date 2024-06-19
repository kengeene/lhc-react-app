import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 0, // request timeout
});

// request interceptor
service.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // if the custom code is not 20000, it is judged as an error.
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return null;
    }
  },
  (err) => {
    const { response, data, message, error } = err;
    throw response || data || message || error || "Error with request";
  }
);

export default service;
