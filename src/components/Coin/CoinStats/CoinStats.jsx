import React from "react";
import styles from "./CoinStats.module.css";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export default function CoinStats({ id, coin }) {
  console.log("CoinStats coin:", coin);
  const getFormattedValue = (value) => {
    return value ? value.toLocaleString() : "N/A";
  };

  return (
    <div>
      <h1>{coin.name} Statistics</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>
              Market Cap
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  Market Cap = Current Price x Circulating Supply
                  <br></br>
                  Refers to the total market value of a cryptocurrency's
                  circulating supply. It is similar to the stock market's
                  measurement of multiplying price per share by shares readily
                  available in the market (not held & locked by insiders,
                  governments)
                </span>
              </span>
            </th>
            <td className={styles.td}>
              ${getFormattedValue(coin?.market_cap)}
            </td>
          </tr>
          <tr>
            <th>
              Fully Diluted Valuation
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  Fully Diluted Valuation (FDV) = Current Price x Total Supply
                  <br />
                  Fully Diluted Valuation (FDV) is the theoretical market
                  capitalization of a coin if the entirety of its supply is in
                  circulation, based on its current market price. The FDV value
                  is theoretical as increasing the circulating supply of a coin
                  may impact its market price. Also depending on the tokenomics,
                  emission schedule or lock-up period of a coin's supply, it may
                  take a significant time before its entire supply is released
                  into circulation.
                </span>
              </span>
            </th>
            <td className={styles.td}>
              ${" "}
              {getFormattedValue(
                coin?.original_data?.market_data?.fully_diluted_valuation?.usd
              )}
            </td>
          </tr>
          <tr>
            <th>
              Trading Volume
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  A measure of a cryptocurrency trading volume across all
                  tracked platforms in the last 24 hours. This is tracked on a
                  rolling 24-hour basis with no open/closing times.
                </span>
              </span>
            </th>
            <td className={styles.td}>
              ${" "}
              {getFormattedValue(
                coin?.original_data?.market_data?.total_volume?.usd
              )}
            </td>
          </tr>
          <tr>
            <th>All-time high</th>
            <td className={styles.td}>
              ${getFormattedValue(coin?.original_data?.market_data?.ath?.usd)}
            </td>
          </tr>
          <tr>
            <th>24h High</th>
            <td className={styles.td}>
              $
              {getFormattedValue(
                coin?.original_data?.market_data?.high_24h?.usd
              )}
            </td>
          </tr>

          <tr>
            <th>
              Circulating Supply
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  The amount of coins that are circulating in the market and are
                  tradeable by the public. It is comparable to looking at shares
                  readily available in the market (not held & locked by
                  insiders, governments).
                </span>
              </span>
            </th>
            <td className={styles.td}>
              $
              {getFormattedValue(
                coin?.original_data?.market_data?.circulating_supply
              )}
            </td>
          </tr>
          <tr>
            <th>
              Total Supply
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  The amount of coins that have already been created, minus any
                  coins that have been burned (removed from circulation). It is
                  comparable to outstanding shares in the stock market.
                  <br />
                  Total Supply = Onchain supply - burned tokens
                </span>
              </span>
            </th>
            <td className={styles.td}>
              $
              {getFormattedValue(
                coin?.original_data?.market_data?.total_supply
              )}
            </td>
          </tr>
          <tr>
            <th>
              Max Supply
              <span className={styles.tooltipContainer}>
                <InfoRoundedIcon sx={{ fontSize: 14 }} />
                <span className={styles.tooltip}>
                  The maximum number of coins coded to exist in the lifetime of
                  the cryptocurrency. It is comparable to the maximum number of
                  issuable shares in the stock market.
                  <br />
                  Max Supply = Theoretical maximum as coded
                </span>
              </span>
            </th>
            <td className={styles.td}>
              ${getFormattedValue(coin?.original_data?.market_data?.max_supply)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
