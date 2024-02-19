import styled from "styled-components";

export const ContactCardWrapper = styled.a`
  border-radius: 12px;
  background: #fff;
  width: 48.5%;
  min-height: 90px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactNumber = styled.div`
  border-radius: 12px 12px 0 0;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 20px;
  color: #000;
`;
export const Initials = styled.div`
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  padding: 15px;
`;

export const ContactButton = styled.div`
  text-decoration: none;
  border-radius: 0px 0px 12px 12px;
  background: #727272;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  padding: 10px 20px !important;
`;
