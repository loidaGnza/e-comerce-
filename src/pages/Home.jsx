import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Componets/Home/Categories";
import ProductCard from "../Componets/Home/ProductCard";
import { getAllProducts } from "../store/Slices/Products.slice";
import "./styles/Home.css";

export const Home = () => {
  const [nameProduct, setNameProduct] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("");

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.nameProduct.value;
    setNameProduct(newName);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    const NewProducts = products.filter(
      (product) =>
        product.title.includes(nameProduct) &&
        (product.category.id == category || category == "")
    );
    setFilterProducts(NewProducts);
  }, [nameProduct, category]);

  return (
    <main className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <div className="home__form-div">
          <input
            className="home__form-input"
            type="text"
            id="nameProduct"
            placeholder="What are you loaking for?"
          />
          <button className="home__form-btn">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </form>
      <Categories setCategory={setCategory} />
      <section className="home__containerProducts">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
