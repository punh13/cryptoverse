import axios from 'axios';
export const getCoinInfo = (id) => {
  const coinInfo = axios
    .get(`/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return coinInfo;
};
