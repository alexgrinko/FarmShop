import React from 'react';

import ReactDOM from 'react-dom';
import { StrictMode } from "react";

import App from './App';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);

