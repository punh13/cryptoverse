import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AllCoins from "../All/AllCoins";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";

function CryptoTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = (tabIndex) => ({
    backgroundColor: value === tabIndex ? "#fdbf1c" : "transparent",
    borderRadius: 2,
    color: value === tabIndex ? "black" : "white",
    fontWeight: value === tabIndex ? "bold" : "normal",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fdbf1c",
      color: "white",
    },
    marginRight: 2,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          pb: 3,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ backgroundColor: "transparent" }}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BarChartRoundedIcon sx={{ marginRight: 1 }} />
                All
              </Box>
            }
            sx={tabStyle(0)}
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CategoryRoundedIcon sx={{ marginRight: 1 }} />
                Categories
              </Box>
            }
            sx={tabStyle(1)}
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <WhatshotRoundedIcon sx={{ marginRight: 1 }} />
                Trending
              </Box>
            }
            sx={{ ...tabStyle(2), marginRight: 0 }}
          />
        </Tabs>
      </Box>

      <CryptoTabs value={value} index={0}>
        <Box sx={{ padding: "16px" }}>
          <AllCoins />
        </Box>
      </CryptoTabs>

      <CryptoTabs value={value} index={1}>
        <Box sx={{ textAlign: "center", padding: "2rem" }}>
          Categories content will be here
        </Box>
      </CryptoTabs>

      <CryptoTabs value={value} index={2}>
        <Box sx={{ textAlign: "center", padding: "2rem" }}>
          Trending content will be here
        </Box>
      </CryptoTabs>
    </Box>
  );
}
