import { configureStore } from "@reduxjs/toolkit";
import products from "./Slices/Products.slice"
import userInfo from "./Slices/userInfo.slice"
import cart from "./Slices/cart.slice";


export default configureStore({
  reducer:{
products,
userInfo,
cart
  }
})