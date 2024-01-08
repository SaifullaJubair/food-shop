import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ category }) => {
  return (
    <div className="m-2">
      <Link to={`/menu/${category.category}`}>
        <div>
          <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={category?.img}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900 to-gray-900/25  h-44 flex items-center justify-center">
              <div className="p-4 sm:p-6">
                <h3 className="mt-6 text-lg font-bold tracking-wider text-white">
                  {category.category}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuList;
