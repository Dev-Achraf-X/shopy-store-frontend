import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

function List({ catId, maxPrice, sort, subCate }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*${subCate.map(
      (item) => item !== "all" && `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort === null ? "asc" : sort}`
  );

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {error
        ? "Something went wrong!"
        : loading
        ? "loading..."
        : data?.map((item) => <Card key={item?.id} item={item} />)}
    </div>
  );
}

export default List;
