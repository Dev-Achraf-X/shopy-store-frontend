import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/product/${item?.id}`}>
      <div className="w-full flex flex-col gap-2.5 mb-12 shadow-lg">
        <div className="w-[100%] h-[400px] overflow-hidden relative image">
          {item?.attributes?.isNew && (
            <span className="absolute top-1 left-1 bg-white text-teal-400 py-3 px-5 z-30 font-medium text-sm">
              New Season
            </span>
          )}
          <img
            src={item?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="w-[100%] h-[100%] object-cover absolute z-10"
          />

          <img
            src={item?.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="w-[100%] h-[100%] object-cover absolute"
          />
        </div>
        <h2 className="text-lg font-normal">{item?.attributes?.title}</h2>
        <div className="flex gap-5">
          <h3 className="text-[18px] font-medium text-[#999] line-through">
            {item?.attributes?.oldPrice || item?.attributes?.price + 20}$
          </h3>
          <h3 className="text-[18px] font-medium">
            {item?.attributes?.price}$
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
