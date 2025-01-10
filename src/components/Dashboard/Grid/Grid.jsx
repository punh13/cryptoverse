import React from 'react';
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';

export default function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-card ${
          coin.price_change_percentage_24h < 0 && 'grid-card-red'
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt="" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              {' '}
              <TrendingUpRoundedIcon />{' '}
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        <div className="coin-info-container">
          <div
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? 'var(--green)'
                  : 'var(--red)',
            }}
          >
            ${coin.current_price.toLocaleString()}
          </div>
          <p className="total-volume total-volume-desktop">
            {' '}
            Total volume: ${coin.total_volume.toLocaleString()}{' '}
          </p>
          <p className="total-volume total-volume-mobile">
            {' '}
            Total volume: ${convertNumber(coin.total_volume)}
          </p>

          <p className="total-volume total-volume-desktop">
            Market cap: ${coin.market_cap.toLocaleString()}
          </p>
          <p className="total-volume total-volume-mobile">
            Market cap: ${convertNumber(coin.market_cap)}
          </p>
        </div>
      </div>
    </Link>
  );
}
