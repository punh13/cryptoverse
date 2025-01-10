import React, { useState } from "react";
import "./styles.css";

export default function CoinDesc({ heading, desc }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleRead = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="coin-info-container">
      <h2>{heading}</h2>
      {desc.length > 0 ? (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: isReadMore ? desc : desc.slice(0, 300) + "...",
            }}
          ></p>
          <p onClick={toggleRead} className="read-toggle">
            {isReadMore ? "Read Less" : "Read More"}
          </p>
        </>
      ) : (
        "No description."
      )}
    </div>
  );
}
