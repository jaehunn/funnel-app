/** @see {docs} https://axios-http.com/kr/docs/api_intro */

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "" },
});

export default axiosInstance;
