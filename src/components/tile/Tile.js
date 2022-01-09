import React from "react";

export const Tile = ({value}) => {
  const arr = Object.values(value);
  return (
    <div className="tile-container">
      {arr.map((data, index) => {
        if (index === 0 ) {
          return <p className="tile-title" key={index}>{data}</p>;
        }
          return <p className="tile" key={index}>{data}</p>;
        })
      }
    </div>
  );
};
