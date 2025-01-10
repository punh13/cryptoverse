// import axios from 'axios';

import axiosInstance from "../plugins/http";

export const getCoinInfo = (id) => {
  const coinInfo = axiosInstance
    .get(`/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return coinInfo;
};
