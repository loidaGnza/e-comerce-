import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Categories.css";

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  const handleClickCategory = (id) => {
    setCategory(id);
  };

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="categories__filter-down">
      <div className="categories__header">
        <span>Categories</span>
        <i className="categories_btn-down bx bx-chevron-down"></i>
      </div>
      <hr />
      <div className="categories__content">
        <ul className="categories___filter">
          <li
            onClick={() => handleClickCategory("")}
            className="categories__list"
          >
            All Products
          </li>
          {categories.map((category) => (
            <li
              className="categories__list"
              onClick={() => handleClickCategory(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
