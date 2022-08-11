import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SetsContextProvider } from './context/SetContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SetsContextProvider>
        <App /> 
      </SetsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
