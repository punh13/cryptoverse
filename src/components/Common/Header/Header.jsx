import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import AnchorTemporaryDrawer from './Drawer';
import Button from '../Button/Button';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Cryptoverse</h1>
      </Link>
      <ul className="links">
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
      <div className="mobile-nav">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}
