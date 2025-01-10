import axios from "axios";

export const getGlobalCryptoInfo = async () => {
  try {
    const response = await axios.get(`/api/v3/global`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching global crypto info:", error);
    return null;
  }
};