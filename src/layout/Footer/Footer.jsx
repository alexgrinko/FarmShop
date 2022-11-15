import React from "react";
import './styles.js';
import Logo from '../../ui/Logo/Logo';
import { StyledSection } from "./styles";

function Footer() {
    return (
      <StyledSection as="footer">
        <Logo />
        <p>Создано 2021</p>
      </StyledSection>
    );
  }
  
  export default Footer;