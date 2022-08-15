import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SetsContextProvider } from './context/SetContext'
import { CurrentSetContextProvider } from './context/CurrentSetContext';
import { AuthContextProvider } from './context/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthContextProvider>
        <SetsContextProvider>
          <CurrentSetContextProvider>
            <App /> 
          </CurrentSetContextProvider>
        </SetsContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
