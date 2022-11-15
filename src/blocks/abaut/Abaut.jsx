
import React from "react";
import { Title, StyledAbautWrapp, StyledAbaut } from "./styles"; 
function Abaut() {
    return(
        <StyledAbautWrapp>
            <StyledAbaut>
                <Title>Магазин фермерских продуктов с доставкой</Title>
                <p>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
            </StyledAbaut>
        </StyledAbautWrapp>
    );
}

export default Abaut;