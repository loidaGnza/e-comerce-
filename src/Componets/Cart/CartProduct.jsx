import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductCart } from "../../store/Slices/cart.slice";
import "./styles/CartProduct.css";

const CartProduct = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProductCart(cartProduct.id));
  };

  return (
    <article className="cartProduct">
      <h4 className="cartProduct__brand">{cartProduct.brand}</h4>
      <h3 className="cartProduct__tittle">{cartProduct.title}</h3>
      <div className="cartProduct__quantity">
        <p>{cartProduct.productsInCart.quantity}</p>
      </div>
      <footer className="cartProduct__footer">
        <h3 className="cartProduct__price">
          <span className="cartProduct__price-title">Total:</span>$
          {(cartProduct.productsInCart.quantity * cartProduct.price).toFixed(2)}
        </h3>
        <i
          onClick={handleDeleteProduct}
          className="cartProduct__trash bx bx-trash"
        ></i>
      </footer>
    </article>
  );
};

export default CartProduct;
