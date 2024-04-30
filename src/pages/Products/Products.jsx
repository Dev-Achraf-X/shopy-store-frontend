import { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="w-full py-8 md:px-12 px-2 flex">
      <div className="flex-1 sticky h-[100%] top-12">
        <div className="filter-item">
          <h2>Proudct Categories</h2>
          {/* -------------------- */}
          <div className="input-item">
            <input
              type="radio"
              id="all"
              value="all"
              defaultChecked
              name="cate"
              onChange={handleChange}
            />
            <label
              htmlFor="all"
              onClick={() => {
                location.reload();
              }}
            >
              All
            </label>
          </div>
          {data?.map((item) => (
            <div className="input-item" key={item?.id}>
              <input
                type="radio"
                id={item?.id}
                value={item?.id}
                name="cate"
                onChange={handleChange}
              />
              <label htmlFor={item?.id}>{item?.attributes?.title}</label>
            </div>
          ))}

          {/* ---------------------------- */}
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="mx-1 cursor-pointer"
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asc"
              defaultChecked
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Heighest first)</label>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-[300px] object-cover mb-12"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCate={selectedSubCats}
        />
      </div>
    </div>
  );
}

export default Products;
