import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
// import fakeData from "../../FakeData/foods.json";
import { Link, useLoaderData, useLocation } from "react-router-dom";
const Food = () => {
  const [menuList, steMenuList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-menu")
      .then((res) => res.json())
      .then((data) => {
        steMenuList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const foods = useLoaderData();
  const location = useLocation();
  // console.log(location);
  const pathnames = location.pathname.split("/").filter((x) => x);
  const categoryName = pathnames.pop();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
          <li>{capitalizeFirstLetter(categoryName)}</li>
        </ul>
      </div>
      <p className="text-center font-semibold text-gray-800">
        Find everything from your Big Mouth Burger,our always sizzling, Full-on
        Fajita and Famous Chicken Crisper
      </p>

      <div className="flex justify-end">
        <div className="dropdown dropdown-bottom dropdown-end mr-4 my-2">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 border  border-gray-400 bg-base-100"
          >
            Menu
          </div>
          <ul className="dropdown-content z-[1] menu p-2 border border-gray-400 shadow bg-base-100 rounded-box w-52">
            {menuList.map((category) => (
              <li key={category.id}>
                <Link
                  className="p-2 m-2 text-gray-600 font-semibold border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                  to={`/menu/${category?.category}`}
                >
                  {category?.category}{" "}
                </Link>
              </li>
            ))}

            <li>
              <Link
                className="p-2 m-2 text-gray-600 font-semibold border-b-2 border-transparent hover:border-red-700 hover:text-red-700 duration-500"
                to="All"
              >
                All
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  my-2 grid-cols-1 gap-2 mx-auto ">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Food;
