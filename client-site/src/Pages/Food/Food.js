import React from "react";
import FoodCard from "./FoodCard";
import fakeData from "../../FakeData/foods.json";
import { Link } from "react-router-dom";
const Food = () => {
  return (
    <div className=" max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-bold text-center  mt-3 text-[#fe5443]">
        {" "}
        CHICKEN CRISPER COMBOS
      </h1>
      <div className="text-sm flex items-center my-2 justify-center breadcrumbs">
        <ul>
          <li>
            <Link to="/" className="text-[#fe5443]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-[#fe5443]">
              Menu
            </Link>
          </li>
          <li>Chicken Crisper Combos</li>
        </ul>
      </div>
      <p className="text-center font-semibold text-gray-800">
        Find everything from your Big Mouth Burger,our always sizzling, Full-on
        Fajita and Famous Chicken Crisper
      </p>

      <div className="flex justify-end">
        <div className="dropdown dropdown-left mr-4 my-2   dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 border  border-gray-600 bg-base-100"
          >
            Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2  shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  my-2 grid-cols-1 gap-2 mx-auto ">
        {fakeData.map((product) => (
          <FoodCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Food;
