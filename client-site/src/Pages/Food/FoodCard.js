import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const FoodCard = ({ food }) => {
  const { _id, id, name, category, price, ratings, ratingsCount, img } = food;
  const [cart, setCart] = useState(false);
  const { AddToCart, setCartRefetch, cartRefetch } = useContext(AuthContext);
  const handleAddToCart = (food) => {
    setCart((prevState) => !prevState);
    const cartData = {
      foodId: _id,
      id,
      name,
      category,
      quantity: 1,
      price,
      ratings,
      ratingsCount,
      img,
    };
    fetch("http://localhost:5000/add-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Food add in your cart", {
            position: toast.POSITION.TOP_CENTER,
          });
          setCart(true);
          AddToCart(cartData);
          setCartRefetch(!cartRefetch);
        } else {
          toast.error(data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 pb-2 mx-auto text-gray-800 my-2  ">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-sm font-semibold">{price}$/each</p>
          <p className="font-semibold">{category}</p>
          <p className="text-gray-800">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
      </div>
      {/* Base */}

      <button
        className="flex items-center justify-center w-11/12 mx-auto mb-2 p-3  font-semibold  rounded-md bg-orange-600 text-gray-50 transition hover:scale-105 hover:shadow-xl "
        onClick={() => {
          handleAddToCart(food);
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
