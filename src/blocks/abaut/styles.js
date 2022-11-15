import styled from "styled-components";
import farmer from "../../assets/man.png";


export const StyledAbautWrapp = styled.div `
    background-color: #D8ECFE;
    position: relative;
    width: 1280px;
    min-height: 600px;
    margin: 0 auto;
`;

export const StyledAbaut = styled.div `
    width: 637px;
    margin-left: 90px;
    padding-top: 183px;

    &::after {
        position: absolute;
        content: "";
        background-image: url(${farmer});
        background-repeat: no-repeat;
        right: 180px;
        top: 55px;
        width: 270px;
        height: 607px;
    }
    
    &::before {
        position: absolute;
        content: "";
        background-color: #C4E2FF;
        width: 444px;
        height: 444px;
        border-radius: 100%;
        right: 90px;
        top: 76px;
    }

    `;

export const Title = styled.h1 `
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 44px;
    line-height: 115%;
`;