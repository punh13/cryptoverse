import React, { useState, useEffect } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Box from "@mui/material/Box";
import "./styles.css";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function ExchangeTradingPairs({ exchangeInfo }) {
  const [pinnedColumns, setPinnedColumns] = useState({ left: ["coin"] });

  const handlePinnedColumnsChange = React.useCallback(
    (updatedPinnedColumns) => {
      setPinnedColumns(updatedPinnedColumns);
    },
    []
  );

  const columns = [
    {
      field: "coin",
      headerName: "Coin",
      width: 150,
    },
    {
      field: "pair",
      headerName: "Pair",
      width: 300,
      renderCell: (params) => (
        <div className="td-pair-flex">
          {params.row.base.toUpperCase()} / {params.row.target.toUpperCase()}
          <a
            href={params.row.trade_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 8 }}
          >
            <OpenInNewRoundedIcon fontSize="small" />
          </a>
        </div>
      ),
    },
    { field: "volume", headerName: "24h Volume (BTC)", width: 200 },
    {
      field: "priceChange",
      headerName: "Price Change (24h)",
      width: 200,
    },
    { field: "lastPrice", headerName: "Last Price", width: 200 },
    {
      field: "high",
      headerName: "High (24h)",
      width: 150,
    },
    { field: "low", headerName: "Low (24h)", width: 200 },
  ];

  const rows = exchangeInfo.tickers?.slice(0, 50).map((ticker, index) => ({
    id: index,
    coin: ticker.base.toUpperCase(),
    base: ticker.base,
    target: ticker.target,
    trade_url: ticker.trade_url,
    volume: ticker.volume.toLocaleString(),
    priceChange: ticker.price_change_percentage_24h || "N/A",
    lastPrice: ticker.last_price || "N/A",
    high: ticker.high || "N/A",
    low: ticker.low || "N/A",
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
    <div className="table-container">
      <Box
        sx={{ width: "100%", backgroundColor: "transparent" }}
        className="data-grid-columns"
      >
        <Box sx={{ height: "80vh", mt: 1 }}>
          <DataGridPro
            rows={rows}
            columns={columns}
            pinnedColumns={pinnedColumns}
            onPinnedColumnsChange={handlePinnedColumnsChange}
            className="data-grid-header"
            rowHeight={50}
            headerHeight={50}
            sx={tableStyle}
          />
        </Box>
      </Box>
    </div>
  );
}
