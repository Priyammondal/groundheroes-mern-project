import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}
`;
export const Container = styled.div`
  width: 100%;
  max-width: 776px;
  min-height: calc(100vh - 75px);
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px !important;
  background-color: #d3d3d3;
`;

export default GlobalStyle;
