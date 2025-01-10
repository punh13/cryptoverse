import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { settingCoinObject } from "../functions/setCoinObject";
import List from "../components/Dashboard/List/List";
import Header from "../components/Common/Header/Header";
import CoinDesc from "../components/Coin/CoinDesc/CoinDesc";
import { getCoinInfo } from "../functions/getCoinInfo";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import CoinToggleButton from "../components/Coin/ToggleButton/ToggleButton";
import Loader from "../components/Common/Loader/Loader";
import { settingChartData } from "../functions/settingChartData";
import CoinStats from "../components/Coin/CoinStats/CoinStats";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import CoinConverter from "../components/Coin/CoinConverter/CoinConverter";

export default function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [days, setDays] = useState(30);
  const [selectMetric, setSelectMetric] = useState("prices");
  const [isLoading, setIsLoading] = useState(false);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (id) {
      getCoinData();
    }
  }, [id, days, selectMetric]);

  const getCoinData = async () => {
    setIsLoading(true);
    const coinData = await getCoinInfo(id);
    if (coinData) {
      settingCoinObject(setCoin, coinData);
      console.log("coin data:", coinData);
      const data = await getCoinPrices(id, days);

      console.log("raw data from api", data);

      if (data) {
        const chartData = settingChartData(data, selectMetric);
        setChartData(chartData);
      }
      setIsLoading(false);
    }
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleMetricChange = (event, newMetric) => {
    setSelectMetric(newMetric);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {coin ? (
            <>
              <div className="gray-container">
                <List coin={coin} />
              </div>
              <div className="coin-stats">
                <div className="gray-container-chart">
                  <SelectDays days={days} handleDaysChange={handleDaysChange} />
                  <CoinToggleButton
                    selectMetric={selectMetric}
                    handleMetricChange={handleMetricChange}
                  />
                  <LineChart
                    chartData={chartData}
                    selectMetric={selectMetric}
                  />
                </div>
                <div className="gray-container-stats">
                  <CoinStats coin={coin} />
                  <CoinInfo coin={coin} />
                </div>
              </div>
              <CoinConverter coin={coin} />
              <CoinDesc heading={coin.name} desc={coin.desc} />
            </>
          ) : (
            <p>No coin data available.</p>
          )}
        </>
      )}
    </>
  );
}
