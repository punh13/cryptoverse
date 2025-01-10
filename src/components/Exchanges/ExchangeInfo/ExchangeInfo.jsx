import React, { useEffect, useState } from "react";
// import axios from "axios";
import Header from "../../Common/Header/Header";
import Loader from "../../Common/Loader/Loader";
import "./styles.css";
import { useParams } from "react-router-dom";
import VolumeChart from "../ExchangeVolume/ExchangeVolume";
import ExchangeTradingPairs from "../ExchangeTradingPairs/ExchangeTradingPairs";
import FailedFetch from "../../Common/Error/FailedFetch";
import axiosInstance from "../../../plugins/http";

export default function ExchangeInfo() {
  const [exchangeInfo, setExchangeInfo] = useState(null);
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExchangeInfo = async () => {
      try {
        const response = await axiosInstance.get(`/api/v3/exchanges/${id}`);
        setExchangeInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchExchangeInfo();
  }, [id]);

  useEffect(() => {
    const fetchVolumeData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v3/exchanges/${id}/volume_chart?days=7`
        );

        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setVolumeData(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setVolumeData([]);
        }
      } catch (err) {
        console.error("Error fetching volume data:", err);
        setVolumeData([]);
      }
    };

    fetchVolumeData();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <FailedFetch />;

  return (
    <>
      <Header />
      <div className="container">
        <div className="exchange-info">
          <div className="header-section-flex">
            <div className="left-section">
              <div className="header-section">
                <div className="logo-name-row">
                  <img
                    className="exchange-logo"
                    src={exchangeInfo.image}
                    alt={exchangeInfo.name}
                  />
                  <h1 className="exchange-name">{exchangeInfo.name}</h1>
                </div>

                <p className="exchange-type">
                  {exchangeInfo.centralized ? "Centralized" : "Decentralized"}
                </p>

                <p className="trading-volume">
                  <strong>24h Trading Volume (BTC):</strong>{" "}
                  {Number(
                    exchangeInfo.trade_volume_24h_btc.toFixed(2)
                  ).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="right-section">
              {volumeData ? (
                <VolumeChart volumeData={volumeData} />
              ) : (
                <p>Loading chart...</p>
              )}
            </div>
          </div>

          <h2>Top 50 Trading Pairs:</h2>
          <div className="trading-table">
            <ExchangeTradingPairs exchangeInfo={exchangeInfo} />
          </div>

          <a
            href={exchangeInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-link"
          >
            Visit {exchangeInfo.name}
          </a>

          <p>
            <strong>Country:</strong> {exchangeInfo.country || "N/A"}
          </p>
          <p>
            <strong>Year Established:</strong> {exchangeInfo.year_established}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {exchangeInfo.description || "No description available."}
          </p>
          <p>
            <strong>Trust Score:</strong> {exchangeInfo.trust_score}
          </p>
          <p>
            <strong>Trust Score Rank:</strong> {exchangeInfo.trust_score_rank}
          </p>
        </div>
      </div>
    </>
  );
}
