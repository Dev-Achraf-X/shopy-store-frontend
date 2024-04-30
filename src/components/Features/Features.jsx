import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

function Features({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="my-24 w-full mx-auto">
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between mb-12">
        <h1 className="w-1/3 capitalize text-3xl font-semibold text-nowrap">
          {type} Product
        </h1>
        <p className="flex-1 text-[#999] text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          nam quam minus quia recusandae quae repellat officiis placeat Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam
          quam minus quia recusandae quae repellat officiis placeat
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:gap-16 gap-8 ">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default Features;
