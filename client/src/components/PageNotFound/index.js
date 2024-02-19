import React, { useEffect } from "react";
import { PageNotFoundWrapper, GoBackButton } from "./Style.js";
import PageNotFoud from "../../assets/pagenotfound.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <PageNotFoundWrapper>
      <img src={PageNotFoud} onClick={() => navigate("/")} />
      <GoBackButton to="/">
        <button>Go Back Home</button>
      </GoBackButton>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
