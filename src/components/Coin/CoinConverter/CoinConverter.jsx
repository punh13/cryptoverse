import React, { useState, useEffect } from "react";
import styles from "./CoinConverter.module.css";

export default function CoinConvertor({ coin }) {
  const [usdAmount, setUsdAmount] = useState("");
  const [coinAmount, setCoinAmount] = useState("");

  useEffect(() => {
    if (coin && coin.current_price) {
      setCoinAmount(1);
      setUsdAmount(coin.current_price);
    }
  }, [coin]);

  const handleCoinChange = (e) => {
    const coinValue = e.target.value;
    setCoinAmount(coinValue);
    setUsdAmount(coinValue * coin.current_price);
  };

  const handleUsdChange = (e) => {
    const usdValue = e.target.value;
    setUsdAmount(usdValue);
    setCoinAmount(usdValue / coin.current_price);
  };

  return (
    <div className={styles.converterContainer}>
      <h2>{coin.name} Converter</h2>
      <div className={styles.inputContainer}>
        <input
          type="number"
          min="0"
          placeholder="Enter amount"
          value={coinAmount}
          onChange={handleCoinChange}
          className={styles.inputField}
        />
        <span className={styles.inputLabel}>
          {coin.original_data?.symbol.toUpperCase()}
        </span>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="number"
          min="0"
          placeholder="Enter amount"
          value={usdAmount}
          onChange={handleUsdChange}
          className={styles.inputField}
        />
        <span className={styles.inputLabel}>USD</span>
      </div>
    </div>
  );
}
