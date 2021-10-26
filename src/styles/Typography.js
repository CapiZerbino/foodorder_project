
import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  html{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    color: var(--gray-1);
  }
  *{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
  }
`;

export default Typography;