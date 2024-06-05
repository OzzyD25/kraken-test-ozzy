import React, { useState } from "react";
import styled from "styled-components";

// type
import { IProduct } from "../../interfaces";
import { CartButtonActions } from "../../enum";

// component
import Paragraph from "../paragraph";
import Button from "../button";

interface CartActionsProps {
  product: IProduct;
}

const StyledCartActionsContainer = styled.div`
  padding: 16px;
`;

const StyledProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: flex-end;
`;

const StyledProductQty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledAddButton = styled(Button)`
  margin-top: 16px;
`;

const CartActions = ({ product }: CartActionsProps) => {
  const [itemCount, setItemCount] = useState<number>(1);

  const handleAmountToggle = (action: string) => {
    if (action === CartButtonActions.INCREASE)
      setItemCount((prevState) => prevState + 1);

    if (action === CartButtonActions.DEACREASE && itemCount !== 1)
      setItemCount((prevState) => prevState - 1);
  };

  return (
    <StyledCartActionsContainer>
      <StyledProductActions>
        <Paragraph
          copy={`£${product.price * (itemCount || 1)}`}
          fontSize="18px"
        />
        <StyledProductActions>
          <Button
            copy="-"
            disabled={itemCount === 1}
            height="24px"
            onClick={() => handleAmountToggle(CartButtonActions.DEACREASE)}
          />

          <StyledProductQty>
            <Paragraph copy="Qty" fontSize="12px" />
            <Paragraph copy={itemCount} />
          </StyledProductQty>

          <Button
            copy="+"
            height="24px"
            onClick={() => handleAmountToggle(CartButtonActions.INCREASE)}
          />
        </StyledProductActions>
      </StyledProductActions>

      <StyledAddButton
        copy={CartButtonActions.ADD_TO_CART}
        width="100%"
        onClick={() => console.log("add to cart")}
      />
    </StyledCartActionsContainer>
  );
};

export default CartActions;
