import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Menu = () => {
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

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold text-center  mt-6 text-[#fe5443]">
        Our Best Menu is here
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
        </ul>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  my-2 grid-cols-1 gap-2 mx-auto  my-12">
        {menuList.map((category) => (
          <MenuList key={category.id} category={category}></MenuList>
        ))}
      </div>
    </div>
  );
};

export default Menu;
