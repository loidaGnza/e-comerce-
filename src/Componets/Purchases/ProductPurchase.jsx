import React from 'react'
import './styles/ProductPurchase.css'

const ProductPurchase = ({productPurchase}) => {
  return (
    <article className='productPurchase'>
<h4 className='productPurchase__title'>{productPurchase.title}</h4>
<h4 className='productPurchase__quantity'>{productPurchase.productsInCart.quantity}</h4>
<h4 className='productPurchase__price'>${(productPurchase.productsInCart.quantity * productPurchase.price)}</h4>
        </article>
  )
}

export default ProductPurchase