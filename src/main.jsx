import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { MyProvider } from './context/MyContext';

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
);
