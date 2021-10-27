import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-primary: #252836;
  }
  html{
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    background-color: "#F5F5F5";
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  
`;


export default GlobalStyle;