import React from "react";
import "./Style";
import { GhLoader, Overlay } from "./Style";
import search from "../../assets/search.gif";

const GroundHeroLoader = () => {
  return (
    <Overlay>
      <GhLoader>
        <img src={search} alt="search gif" />
      </GhLoader>
    </Overlay>
  );
};

export default GroundHeroLoader;
