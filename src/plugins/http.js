import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com", // Replace with your API base URL
  timeout: 10000, // Set the timeout limit (in milliseconds)
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace with your token or use a dynamic solution
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request before it is sent
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code in the range of 2xx triggers this function
    console.log("Response Data:", response.data);
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx trigger this function
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
