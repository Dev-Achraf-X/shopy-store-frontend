import { useState } from "react";
import { BaggageClaim, Heart, Scale } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../context/CartReducer";

function Product() {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleClickImage = (newImage) => {
    setSelectedImg(newImage);
  };

  return (
    <div className="py-5 px-12 flex flex-col-reverse md:flex-row gap-12">
      <>
        <div className="flex-1 flex flex-col-reverse gap-5">
          <div className="max-w-[600px] flex items-center justify-between gap-4">
            {/* Choosing image */}
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="w-1/2 h-[150px] object-cover cursor-pointer mb-2.5 border-2 border-blue-600 hover:scale-105 transition-all rounded"
              onClick={() => handleClickImage("img")}
            />
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              className="w-1/2 h-[150px] object-cover cursor-pointer mb-2.5 border-2 border-blue-600 hover:scale-105 transition-all rounded"
              onClick={() => handleClickImage("img2")}
            />
          </div>
          <div className="max-w-[600px] max-h-[600px]">
            {/* Main image */}
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                data?.attributes?.[selectedImg].data?.attributes?.url
              }
              alt=""
              className="w-full max-h-[800px] object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 text-center md:text-left">
          <h1 className="text-2xl capitalize font-semibold">
            {data?.attributes?.title}
          </h1>
          <span className="text-3xl text-blue-600 font-medium">
            ${data?.attributes?.price}
          </span>
          <p className="text-lg font-light text-justify mx-auto md:mx-0">
            {data?.attributes?.desc}
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-2.5">
            <button
              onClick={() => {
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
              }}
              className="w-12 h-12 flex items-center justify-center cursor-pointer border-none"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
              className="w-12 h-12 flex items-center justify-center cursor-pointer border-none"
            >
              +
            </button>
          </div>
          <button
            className="w-[250px] p-2.5 bg-blue-600 text-white flex items-center justify-center mx-auto md:mx-0 gap-5 cursor-pointer border-none font-medium"
            onClick={() =>
              dispatch(
                addProductToCart({
                  id: data?.id,
                  title: data?.attributes?.title,
                  price: data?.attributes?.price,
                  img:
                    import.meta.env.VITE_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url,
                  quantity,
                })
              )
            }
          >
            <BaggageClaim />
            ADD TO CART
          </button>
          <div className="flex gap-5 mx-auto md:mx-0">
            <div className="flex items-center gap-2.5 text-blue-600 text-sm">
              <Heart />
              ADD TO WISH LIST
            </div>
            <div className="flex items-center gap-2.5 text-blue-600 text-sm">
              <Scale />
              ADD TO COMPARE
            </div>
          </div>
          <div className="flex flex-col gap-2.5 text-[gray] text-sm mt-7">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tap: T-Shirt, Women, Top</span>
          </div>
          <hr className="border-1 border-[rgb(238,237,237)]" />
          <div>
            <span>DESCRIPTION</span>
            <hr className="w-52 mx-auto md:mx-0 border-1 border-[rgb(238,237,237)]" />
            <span>ADDITIONAL INFORMATION</span>
            <hr className="w-52 mx-auto md:mx-0 border-1 border-[rgb(238,237,237)]" />
            <span>FAQ</span>
          </div>
        </div>
      </>
    </div>
  );
}

export default Product;
