import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import ErroMsg from "../../libs/ErroMsg";
import Spinner from "../../libs/Spinner";

function List({ catId, maxPrice, sort, subCate }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*${subCate.map(
      (item) => item !== "all" && `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort === null ? "asc" : sort}`
  );

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative">
      {error ? (
        <ErroMsg />
      ) : loading ? (
        <Spinner />
      ) : (
        data?.map((item) => <Card key={item?.id} item={item} />)
      )}
    </div>
  );
}

export default List;
