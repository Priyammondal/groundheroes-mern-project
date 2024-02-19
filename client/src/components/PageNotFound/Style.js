import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const PageNotFoundWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const GoBackButton = styled(Link)`
  button {
    padding: 10px 15px;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.5s ease-in-out;
    &:hover {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
  }
`;
