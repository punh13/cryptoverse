import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} sx={{ minWidth: "auto" }}>
        {" "}
        <MenuRoundedIcon className="link" />{" "}
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <ul className="drawer-container">
          <Link to="/">
            <li className="link">Home</li>
          </Link>
          <Link to="/cryptocurrencies">
            <li className="link">Cryptocurrencies</li>
          </Link>
          <Link to="/exchanges">
            <li className="link">Exchanges</li>
          </Link>
          <Link>
            <li className="link">NFT</li>
          </Link>
        </ul>
      </Drawer>
    </div>
  );
}
