import React from "react";

const FoodCard = ({ product }) => {
  const { name, category, price, ratings, ratingsCount, img } = product;
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 pb-2 mx-auto text-gray-800 my-2  ">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Donec lectus leo</h2>
          <p className="text-sm font-semibold">{price}$/each</p>
          <p className="text-gray-800">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
      </div>
      {/* Base */}

      <button
        className="flex items-center justify-center w-11/12 mx-auto mb-2 p-3  font-semibold  rounded-md bg-orange-600 text-gray-50 transition hover:scale-105 hover:shadow-xl "
        onClick={() => {
          document.getElementById("cartSidebar").style.display = "block";
        }}
      >
        Add to Order
      </button>

      <button className="flex items-center justify-center w-11/12 mx-auto my-2 p-3  rounded border border-current px-8 py-3 text-sm font-medium text-orange-600 transition hover:scale-105 hover:shadow-xl ">
        Customize
      </button>
    </div>
  );
};

export default FoodCard;
