import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
const Cart = ({ toggleCart, cartVisible }) => {
  return (
    <div
      style={{ display: cartVisible ? "block" : "none" }}
      id="cartSidebar"
      className="fixed top-0 right-0 z-40 w-64 h-screen overflow-y-auto duration-500 transition-all bg-[#fe5443]"
    >
      <div className="bg-white p-4  w-full">
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-[#fe5443] flex items-center gap-2"
        >
          <FaCartPlus className=""></FaCartPlus> Item
        </h5>
        <button
          onClick={() => {
            document.getElementById("cartSidebar").style.display = "none";
          }}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-[#fe5443]  hover:bg-[#fe5443] hover:text-white rounded-lg text-sm p-2 absolute top-2.5 end-2.5 inline-flex items-center font-semibold"
        >
          Close
        </button>
      </div>
      <div className=" p-4 overflow-y-auto">
        <div className="space-y-2 font-medium">
          <img src="https://i.ibb.co/7WwwFNk/7-3-600x600.png" alt="" />
          <div>
            <h3 className="text-sm font-semibold text-white">Chicken fries</h3>
            <p className="text-xs text-white">Category</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
