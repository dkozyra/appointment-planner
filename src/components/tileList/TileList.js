import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({contactsArr}) => {
  return (
    <div>
      {contactsArr.map((value, index) => <Tile value={value} key={index}/>)}
    </div>
  );
};
