import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  padding: 15px;
  background: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(113, 113, 113, 0.25);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LogoWrapper = styled(Link)``;

export const NameWrapper = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-left: 0.5rem;
  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  ${(props) =>
    props.spaceBetween &&
    `justify-content: space-between; align-items: center;`};
  ${(props) => props.alignItemsEnd && `align-items: end;`};
`;
