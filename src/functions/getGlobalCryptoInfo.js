// import axios from "axios";

import axiosInstance from "../plugins/http";

export const getGlobalCryptoInfo = async () => {
  try {
    const response = await axiosInstance.get(`/api/v3/global`);
    return response.data;
  } catch (error) {
    console.error("Error fetching global crypto info:", error);
    return null;
  }
};
