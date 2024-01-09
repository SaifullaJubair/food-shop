import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Pages/Home/Cart/Cart";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const { cartRefetch } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://food-shop-server-site.vercel.app/my-cart")
      .then((res) => res.json())
      .then((data) => {
        setMyCart(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [cartRefetch]);
  // Toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="bg-[#faf5f2]   border-t-2   border-red-400">
      <div className="navbar max-w-[1300px] mx-auto">
        <div className="navbar">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/menu"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  MENU
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/rewards"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  REWARDS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/locations"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  LOCATIONS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/gift-card"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  GIFT CARDS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/login"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to="/">
            <img
              src="https://i.ibb.co/nq2LMxZ/pngwing-com.png"
              alt="logo"
              className="lg:w-16 h-12 md:w-12 w-12"
            />
          </Link>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal  px-1">
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/menu"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  MENU
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/rewards"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  REWARDS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/locations"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  LOCATIONS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/gift-card"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  GIFT CARDS
                </Link>
              </li>
              <li className=" my-2 md:my-0 lg:my-0">
                <Link
                  to="/login"
                  className="md:ml-5 text-md font-bold  text-gray-700 tracking-wide hover:bg-[#faf5f2] border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                >
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <div className=" flex items-center">
            <div
              role="button"
              className="btn btn-ghost btn-circle"
              // onClick={() => {
              //   document.getElementById("cartSidebar").style.display = "block";
              // }}
              onClick={toggleCart}
            >
              {/* cart icon */}
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {myCart.length}
                </span>
              </div>
            </div>
            <button className="btn btn-sm  bg-[#fe5443] font-semibold mx-6 text-white  hover:bg-orange-500 hover:scale-105">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      <Cart toggleCart={toggleCart} cartVisible={cartVisible}></Cart>
    </div>
  );
};

export default Navbar;
