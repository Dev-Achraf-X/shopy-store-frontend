import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Categories() {
  const { data } = useFetch(`/categories`);
  let filterWomen = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].attributes.title === "women") {
      filterWomen = [...filterWomen, data[i]];
    }
  }
  let filtermen = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].attributes.title === "men") {
      filtermen = [...filtermen, data[i]];
    }
  }
  return (
    <div className="flex h-[80vh] gap-2.5 m-2.5">
      <div className="cate-col">
        <div className="cate-row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="cate-img"
          />
          <button className="cate-btn">
            <Link to={`/products/${data[0]?.id}`}>Sale</Link>
          </button>
        </div>
        <div className="cate-row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="cate-img"
          />
          <button className="cate-btn">
            <Link to={`/products/${filterWomen[0]?.id}`}>Women</Link>
          </button>
        </div>
      </div>
      <div className="hidden md:flex-1 md:flex md:flex-col md:gap-2.5">
        <div className="cate-row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="cate-img"
          />
          <button className="cate-btn">
            <Link to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className="cate-col">
        <div className="cate-row">
          <div className="cate-col">
            <div className="cate-row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="cate-img"
              />
              <button className="cate-btn">
                <Link to={`/products/${filtermen[0]?.id}`}>Men</Link>
              </button>
            </div>
          </div>
          <div className="cate-col">
            <div className="cate-row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="cate-img"
              />
              <button className="cate-btn">
                <Link to="/products/1">Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="cate-row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="cate-img"
          />
          <button className="cate-btn">
            <Link to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
