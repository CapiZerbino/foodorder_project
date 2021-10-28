import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'
import Typography from './styles/Typography'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter basename={window.location.pathname || ''}>
  <GlobalStyle/>
      <Typography/>
  <App />
  
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

