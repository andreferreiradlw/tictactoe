import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyles';
import Game from './components/Game';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Game />
  </React.StrictMode>,
);
