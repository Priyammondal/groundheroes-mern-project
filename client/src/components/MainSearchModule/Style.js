import styled from "styled-components";

export const SearchModuleWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: 40px 0;
  border-radius: 6px;
  background: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(113, 113, 113, 0.25);
`;

export const SearchInputWrapper = styled.div`
  padding: 15px;
  flex: 1;
`;
export const SearchInput = styled.input`
  height: 40%;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #717171;
  padding: 5px;
`;
export const SearchButton = styled.button`
  background-color: #000;
  height: 65px;
  width: 65px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
