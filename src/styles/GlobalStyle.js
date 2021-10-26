import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-primary: #252836;
    --gray-1: #F8F7F6;
    --green-secondary: #148E0F;
    --white : white;
    --black: black;
    --animate-duration: 800ms;
    --animate-delay: 0.3s;
  }
  html{
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    background-color: var(--dark-primary);
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
  .container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;


export default GlobalStyle;