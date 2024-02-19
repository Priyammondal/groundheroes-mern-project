import styled from "styled-components";
import { Container } from "../../globalStyles";

export const CategoryListingWrapper = styled(Container)``;

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 40px 0 0 0;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;

export const CategoryHeading = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export const FeedBack = styled.div`
  padding: 100px 0 20px 0;
`;

export const NoService = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  gap: 10px;

  img {
    cursor: pointer;
  }
`;
