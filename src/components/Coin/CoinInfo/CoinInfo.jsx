import React from "react";
import styles from "./CoinInfo.module.css";

export default function CoinInfo({ coin }) {
  return (
    <div>
      <h1 className={styles.h1}> Info</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Website</th>
            <td>
              <a href={coin?.original_data?.links?.homepage}>Homepage</a>
            </td>
          </tr>
          <tr>
            <th>Whitepaper</th>
            <td>
              <a href={coin?.original_data?.links?.whitepaper}>Whitepaper</a>
            </td>
          </tr>
          <tr>
            <th>Community</th>
            <td>
              <span>
                <a
                  href={`https://facebook.com/${coin?.original_data?.links?.facebook_username}`}
                >
                  Facebook
                </a>{" "}
              </span>
              <span>
                <a
                  href={`https://x.com/${coin?.original_data?.links?.twitter_screen_name}`}
                >
                  X
                </a>{" "}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
