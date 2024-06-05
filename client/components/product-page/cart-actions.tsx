import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// type
import { IProduct } from "../../interfaces";
import { CartButtonActions } from "../../enum";

// component
import Paragraph from "../paragraph";
import Button from "../button";

// slice
import { addProductToCart } from "../../store/slices/cartSlice";

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
  const dispatch = useDispatch();

  const handleAmountToggle = (action: string) => {
    if (action === CartButtonActions.INCREASE)
      setItemCount((prevState) => prevState + 1);

    if (action === CartButtonActions.DEACREASE && itemCount !== 1)
      setItemCount((prevState) => prevState - 1);
  };

  const handleAddToCart = () => {
    // Create an array of the same product repeated itemCount times
    const productsToAdd = Array.from({ length: itemCount }, () => product);

    // Dispatch an action for each product in the array
    productsToAdd.forEach((productToAdd) => {
      dispatch(addProductToCart(productToAdd));
    });
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
            <Paragraph title="Current quantity" copy={itemCount} />
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
        onClick={handleAddToCart}
      />
    </StyledCartActionsContainer>
  );
};

export default CartActions;
