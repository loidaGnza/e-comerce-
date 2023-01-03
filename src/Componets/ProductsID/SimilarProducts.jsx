import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Home/ProductCard'
import './styles/SimilarProducts.css'

const SimilarProducts = ({product, categories}) => {

  const [productsbyCategory, setProductsbyCategory] = useState([])


useEffect(() => {
  if(categories && product){
      const category = categories.filter(category => category.name === product.category)
const url = `https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`
axios.get(url)
.then(res => {
const productsFilter = res.data.data.products.filter(productCategory => productCategory.id !== product.id)
setProductsbyCategory(productsFilter)
})
.catch(err => console.log(err))
  }

}, [categories, product ])


  return (
    <section className='similarProducts'>
{
  productsbyCategory.map(productbyCategory => <ProductCard product = {productbyCategory} key = {productbyCategory.id} />)
}
    </section>
  )
}

export default SimilarProducts