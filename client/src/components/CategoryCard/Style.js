import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryCardWrapper = styled(Link)`
  border-radius: 12px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  width: 222px;
  border-radius: 12px;
  padding: 15px 10px;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const ImageWrapper = styled.section`
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
`;
export const CategoryWrapper = styled.section``;
