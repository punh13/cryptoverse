import axios from 'axios';

export const get200Coins = async () => {
  try {
    const response = await axios.get(
      '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    return []; 
  }
};