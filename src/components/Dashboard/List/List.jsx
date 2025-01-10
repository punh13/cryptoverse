import React from 'react';
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';

export default function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td className="td-img">
          <img src={coin.image} className="coin-logo coin-logo-td" alt="" />{' '}
        </td>
        <td>
          <div className="name-col name-col-td">
            <p className="coin-symbol coin-symbol-td">{coin.symbol}</p>
            <p className="coin-name coin-name-td">{coin.name}</p>
          </div>
        </td>

        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex chip-flex-td">
            <div className="price-chip price-chip-td">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-chip-td">
              {' '}
              <TrendingUpRoundedIcon />{' '}
            </div>
          </td>
        ) : (
          <td className="chip-flex chip-flex-td">
            <div className="price-chip chip-red price-chip-td">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-chip-red icon-chip-td">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}

        <Tooltip title="Current Price" placement="bottom">
          <td>
            <div
              className="coin-price td-center-align coin-price-td"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? 'var(--green)'
                    : 'var(--red)',
              }}
            >
              ${coin.current_price.toLocaleString()}
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="total-volume-td-desktop">
            <p className="total-volume total-volume-td td-right-align ">
              {' '}
              $ {coin.total_volume.toLocaleString()}{' '}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="td-desktop">
            <p className="total-volume total-volume-td td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="td-mobile">
            <p className="total-volume total-volume-td td-right-align">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}
