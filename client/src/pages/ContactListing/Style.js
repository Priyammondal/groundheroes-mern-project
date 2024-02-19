import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ContactListingWrapper = styled(Container)`
  padding-top: 20px !important;

  @media screen and (max-width: 767px) {
    padding: 20px 10px 40px 10px !important;
  }
`;

export const ContactInfo = styled.div`
  border-radius: 12px 12px 0px 0px;
  background: #000;
  min-height: 50vh;
  padding: 10px;
  text-align: center;
`;
export const ContactType = styled.div`
  display: flex;
  align-items: flex-end;
  color: #fff;
  gap: 10px;
  div {
    border-radius: 10px;
    background: #fff;
    padding: 10px 10px 9px 12px;
  }
  p {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ContactCardWrapper = styled.div`
  margin: 50px 0 100px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  text-align: left;
`;
export const ViewButton = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(114, 114, 114, 0.25);
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  top: 30px;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ReviewWrapper = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
  a {
    color: #000;
    font-weight: 700;
  }
`;
