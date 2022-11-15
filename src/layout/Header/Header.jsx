// import Logo from "../../../catcofe/src/components/ui/logo/Logo";
import React from "react";
import Button from "../../ui/Button/Button";
import Logo from "../../ui/Logo/Logo";
import { StyledSection } from "./styles";


function Header({
    pageUrl // урл страницы
  }) {
    return (
      <StyledSection as="header">
        <Logo />
        <Button pageUrl={pageUrl}>Купить продукт</Button>
      </StyledSection>
    );
  }
  
  export default Header;