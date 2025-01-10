import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosInstance from "@/plugins/http.js";
// import axiosInstance from "../../../plugins/http";
import Header from "../../Common/Header/Header";
import styles from "./ExchangeList.module.css";
import { useNavigate } from "react-router-dom";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import Loader from "../../Common/Loader/Loader";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Box from "@mui/material/Box";

export default function CryptoExchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pinnedColumns, setPinnedColumns] = useState({ left: ["name"] });

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/api/v3/exchanges`)
      .then((response) => {
        setExchanges(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handlePinnedColumnsChange = React.useCallback(
    (updatedPinnedColumns) => {
      setPinnedColumns(updatedPinnedColumns);
    },
    []
  );

  const handleRowClick = (id) => {
    navigate(`/exchanges/${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => (
        <div
          onClick={() => handleRowClick(params.row.id)}
          style={{ cursor: "pointer" }}
        >
          {params.row.name}
        </div>
      ),
    },
    { field: "trustScoreRank", headerName: "Trust Score Rank", width: 150 },
    { field: "trustScore", headerName: "Trust Score", width: 150 },
    {
      field: "volumeNormalized",
      headerName: "24h Volume (Normalized)",
      width: 240,
    },
    { field: "volume", headerName: "24h Volume", width: 220 },
    {
      field: "website",
      headerName: "Website",
      width: 150,
      renderCell: (params) => (
        <a
          href={params.row.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--orange)", textDecoration: "underline" }}
        >
          Visit
        </a>
      ),
    },
    { field: "volumeChart", headerName: "Last 7 days", width: 220 },
  ];

  const rows = exchanges.map((exchange, index) => ({
    id: exchange.id,
    name: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={exchange.image}
          alt={exchange.name}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "8px",
            marginLeft: "8px",
            borderRadius: "10px",
          }}
        />
        <span>{exchange.name}</span>
      </div>
    ),
    trustScoreRank: exchange.trust_score_rank,
    trustScore: `${exchange.trust_score} / 10`,
    volumeNormalized:
      exchange.trade_volume_24h_btc_normalized?.toFixed(2) || "N/A",
    volume: exchange.trade_volume_24h_btc?.toFixed(2) || "N/A",
    websiteUrl: exchange.url,
    volumeChart: "N/A",
  }));

  const tableStyle = {
    "& .MuiDataGrid-footerContainer": {
      display: "none",
    },
    "& .MuiDataGrid-scrollbar--horizontal": {
      height: "5px",
    },
    "& .MuiDataGrid-scrollbar--horizontal::-webkit-scrollbar": {
      height: "5px",
    },
    "& .MuiDataGrid-scrollbar--horizontal::-webkit-scrollbar-thumb": {
      borderRadius: "6px",
    },
    "& .MuiDataGrid-row:hover .MuiDataGrid-cell:not(.MuiDataGrid-cell--pinned)":
      {
        backgroundColor: "var(--darkgray)",
      },
    "& .MuiDataGrid-cell": {
      textAlign: "center",
    },
    "& .MuiDataGrid-cell--pinnedLeft, & .MuiDataGrid-cell--pinnedRight": {
      backgroundColor: "var(--black) !important",
      zIndex: 999,
      color: "white",
    },
    "& .MuiDataGrid-cell--pinnedLeft:hover, & .MuiDataGrid-cell--pinnedRight:hover":
      {
        backgroundColor: "var(--darkgray) !important",
      },
    "& .MuiDataGrid-columnHeader--pinnedLeft": {
      backgroundColor: "var(--orange) !important",
      color: "#000",
    },
    "& .MuiDataGrid-container--top [role='row'], & .MuiDataGrid-container--bottom [role='row']":
      {
        backgroundColor: "var(--orange) !important",
        color: "#000",
      },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
      color: "white",
    },
  };

  return (
    <>
      <Header />
      <div className={styles.tableContainer}>
        <h1 className="crypto-exchanges-header">
          <AccountBalanceRoundedIcon /> Crypto Exchanges
        </h1>
        <Box
          sx={{ width: "100%", backgroundColor: "transparent" }}
          className={styles.dataGridColumns}
        >
          <Box sx={{ height: "80vh", mt: 1 }}>
            <DataGridPro
              rows={rows}
              columns={columns}
              pinnedColumns={pinnedColumns}
              onPinnedColumnsChange={handlePinnedColumnsChange}
              className={styles.dataGridHeader}
              rowHeight={80}
              headerHeight={50}
              sx={tableStyle}
            />
          </Box>
        </Box>
      </div>
    </>
  );
}
