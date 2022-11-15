
import React from "react";
import { GlobalStyle } from "./styles";
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Main  from './pages/Main';


function App() {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </>
  );
}

export default App;
