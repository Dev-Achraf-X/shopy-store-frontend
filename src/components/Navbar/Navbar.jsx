import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import CartCheck from "./CartCheck";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const {products} = useSelector(state => state.cart)
  
  const [showCart, setShowCart] = useState(false);
  return (
    <header>
      <div className="w-full flex items-center justify-between h-[80px] py-4 px-3">
        <div className="sm:flex items-center gap-6 hidden">
          <div className="sm:flex items-center cursor-pointer hidden">
            <img src="/public/images/en.png" width={23} />
            <ChevronDown size={15} />
          </div>
          <div className="sm:flex items-center cursor-pointer text-sm hidden">
            <span>USD</span>
            <ChevronDown size={15} />
          </div>
          <ul className=" items-center gap-4 text-md font-normal  text-gray-500 link hidden lg:flex">
            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Children</Link>
            <Link to="#">Accessoires</Link>
          </ul>
        </div>
        <div className="text-2xl font-bold text-gray-500 color-change transition-all w-1/5 text-bold text-nowrap text-center">
          <Link to="/">Shopy Store</Link>
        </div>
        <div className="flex items-center gap-5">
          <ul className="text-md font-normal space-x-4 text-gray-500 link hidden lg:block">
            <Link to="/#">Home</Link>
            <Link to="/#">About</Link>
            <Link to="/#">Contact</Link>
            <Link to="/#">Store</Link>
          </ul>
          <div className="flex items-center gap-2 text-gray-500">
            <Search size={15} className="cursor-pointer" />
            <UserRound size={15} className="cursor-pointer" />
            <Heart size={15} className="cursor-pointer" />
            <div className=" relative">
              <ShoppingBasket
                size={20}
                onClick={() => {
                  setShowCart((prev) => !prev);
                }}
                className="cursor-pointer"
              />
              <span className="absolute -top-3 -right-1 text-[12px] bg-blue-600 text-white w-3.5 h-4 rounded-full flex items-center justify-center">
                {products.length}
              </span>
              {showCart && <CartCheck setShowCart={setShowCart} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
