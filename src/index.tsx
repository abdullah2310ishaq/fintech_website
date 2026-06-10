import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot/Chatbot';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Main />
      <Chatbot />
    </BrowserRouter>
  </React.StrictMode>
);
