import React from "react";
import cardList from '../../mocks/cardList';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';

import { StyledList, StyledAdvantage, StyledAdvantageWrapp, Title, StyledItem } from "./styles";

function Advantage() {
    const getCards = () => {
        const cards = cardList.map((card) => (
            <StyledList key={card.id}>
                <Card {...card} />        
            </StyledList>))
        return cards
    }
    return (
        <StyledAdvantage>
            <StyledAdvantageWrapp>
                <Title>Почему фермерские продукты лучше?</Title>
                <StyledItem>          
                    {getCards()}
                </StyledItem>
                <Button>Купить</Button>
            </StyledAdvantageWrapp>
        </StyledAdvantage>
    );
}
export default Advantage;