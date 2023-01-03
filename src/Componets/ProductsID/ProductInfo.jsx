import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../store/Slices/cart.slice";
import "./styles/ProductInfo.css";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    const newValue = quantity - 1;
    if (newValue >= 1) {
      setQuantity(newValue);
    }
  };

  const handleAddProduct = () => {
    const data = {
      id: product.id,
      quantity: quantity,
    };
    dispatch(addProductCart(data));
  };

  return (
    <article className="productInfo">
      <div className="productInfo__img">
        <img src={product?.productImgs[0]} alt="" />
      </div>
      <div className="productInfo__info">
        <h2 className="productInfo__title">{product?.title}</h2>
        <p className="productInfo__description">{product?.description}</p>
        <footer className="productInfo__footer">
          <div className="productInfo__container-price">
            <h3 className="productInfo__price-title">Price</h3>
            <span className="productInfo__price">{product?.price}</span>
          </div>
          <div className="productInfo__container-quantity">
            <h3 className="productInfo__quantity-title">Quantity</h3>
            <div className="productInfo__container-counter">
              <div className="productInfo__minus" onClick={handleMinus}>
                -
              </div>
              <div className="productInfo__counter">{quantity}</div>
              <div className="productInfo__plus" onClick={handlePlus}>
                +
              </div>
            </div>
          </div>
          <button className="productInfo__btn" onClick={handleAddProduct}>
            Add to cart <i className="bx bx-cart"></i>{" "}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductInfo;
