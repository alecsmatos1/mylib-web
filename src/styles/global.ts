import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F2F2F2;
}

  body, input, buttom{
    font: 16px Roboto, sans-serif;
  }
  #root{
    margin: 0 auto;
    padding: 0px 30px;
  }
  button {
    cursor: pointer;
  }
`;
