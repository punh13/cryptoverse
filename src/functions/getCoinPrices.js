import axios from 'axios';

export const getCoinPrices = async (id, days) => {
  const response = await axios.get(
    `/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
  );

  const prices = response.data.prices.map((price) => ({
    price: price[1],
    timestamp: price[0],
  }));

  const marketCap = response.data.market_caps.map((marketCap) => ({
    marketCap: marketCap[1],
    timestamp: marketCap[0],
  }));

  const volumes = response.data.total_volumes.map((volume) => ({
    volume: volume[1],
    timestamp: volume[0],
  }));

  return {
    prices,
    marketCaps: marketCap,
    totalVolumes: volumes,
  };
};
