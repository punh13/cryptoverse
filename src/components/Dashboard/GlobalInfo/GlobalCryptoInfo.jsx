import React, { useEffect, useState } from "react";
import { getGlobalCryptoInfo } from "../../../functions/getGlobalCryptoInfo";
import { convertNumber } from "../../../functions/convertNumber";
import "./styles.css";

export default function GlobalCryptoInfo() {
  const [globalCryptoInfo, setGlobalCryptoInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGlobalCryptoInfo();
      setGlobalCryptoInfo(data);
    };

    fetchData();
  }, []);

  const getPercentageStyle = (value) => {
    return value > 0 ? "text-green" : "text-red";
  };

  return (
    <div className="global-data-container">
      <h2>Cryptocurrency Prices by Market Cap</h2>
      {globalCryptoInfo ? (
        <div>
          <p>
            The global cryptocurrency market cap today is $
            <span>
              {convertNumber(globalCryptoInfo.data.total_market_cap.usd)}
            </span>{" "}
            USD, a{" "}
            <span
              className={getPercentageStyle(
                globalCryptoInfo.data.market_cap_change_percentage_24h_usd
              )}
            >
              {globalCryptoInfo.data.market_cap_change_percentage_24h_usd.toFixed(
                2
              )}
            </span>{" "}
            % change in the last 24 hours.
          </p>
          <div className="market-data-flex">
            <div className="market-data-box">
              <p>
                {" "}
                $ {globalCryptoInfo.data.total_market_cap.usd.toLocaleString()}
              </p>
              <p>
                Market Cap{" "}
                <span
                  className={getPercentageStyle(
                    globalCryptoInfo.data.market_cap_change_percentage_24h_usd
                  )}
                >
                  {globalCryptoInfo.data.market_cap_change_percentage_24h_usd.toFixed(
                    2
                  )}
                  %
                </span>{" "}
              </p>
            </div>
            <div className="market-data-box">
              <p>
                {" "}
                $ {globalCryptoInfo.data.total_volume.usd.toLocaleString()}
              </p>
              <p> Trading Volume </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
