import React from 'react';
import chocolate from "../imgs/chocolate-bar.png";
import cacao from "../imgs/cocoa.png";
import { useState }  from "react";


function Tile(props) {

    const urls = [chocolate, cacao];

    return (
      
      <section className="Tile">
        <p id="p_tile">{props.symbol}</p>
      </section>
    

    );
  }
  
  export default Tile;