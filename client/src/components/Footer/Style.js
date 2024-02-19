import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  padding: 30px 60px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80px;
    weidth: 80px;
  }
`;
export const AboutUsWrapper = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  section {
    p {
      margin: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  @media screen and (max-width: 992px) {
    margin: 20px 0;
  }
`;
export const SocialWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SocialIcons = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  img {
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const PoweredBy = styled.section`
  text-align: center;
`;
