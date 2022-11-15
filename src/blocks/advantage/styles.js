import styled from "styled-components";


export const StyledAdvantage = styled.section `
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    padding-bottom: 100px;
    `;

export const StyledAdvantageWrapp = styled.div `   
    padding: ${(props) => props.theme.pagePadding};
    text-align: center;
    `;

export const Title = styled.h2 `
    font-weight: 700;
    font-size: 36px;
    line-height: ${(props) => props.theme.lineHeightDefault};
    padding: 0;
    margin: 0;
    margin-bottom: 64px;
`;

export const StyledItem = styled.ul `
    width: 1100px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 44px;
    `;

export const StyledList = styled.li `
    margin-bottom: 20px;
`;