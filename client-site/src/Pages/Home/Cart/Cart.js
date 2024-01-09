import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";
const Cart = ({ toggleCart, cartVisible }) => {
  const [quantity, setQuantity] = useState(1);
  const [deleteData, setDeleteData] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const { removeProductCart, handleQuantity } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/my-cart")
      .then((res) => res.json())
      .then((data) => {
        setMyCart(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refetch]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDeletePost = (item) => {
    // console.log(post);
    fetch(`http://localhost:5000/cart/${item?.foodId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if deletion was successful
        if (data.deletedCount > 0) {
          setDeleteData(false);
          setRefetch(!refetch);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    removeProductCart(item);
  };

  const updateQuantity = (value, item) => {
    console.log(value, item);
    if (item.quantity + value != 0) {
      fetch(`http://localhost:5000/cart/${item?.foodId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: item.quantity + value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setRefetch(!refetch);
        });
    }
  };

  // const handleAddToCart = () => {
  //   const cartData = {
  //     productId: singleProduct?._id,
  //     userId: user?.uid,
  //     userEmail: user?.email,
  //     userName: user?.displayName,
  //     selectedColor: selectedColor,
  //     quantity: quantity,
  //   };
  //   // console.log("cartData:", cartData);
  //   fetch(
  //     `https://shovon-gallery-server.vercel.app/cart/${singleProduct?._id}?email=${user?.email}`
  //   )
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (
  //         data &&
  //         data.productId === singleProduct?._id &&
  //         data.userEmail === user?.email
  //       ) {
  //         // Product is already in the cart, show a toast notification
  //         toast.error("This product is already in your cart", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       } else {
  //         // Product is not in the cart, add it to the cart collection
  //         fetch("https://shovon-gallery-server.vercel.app/add-cart", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(cartData),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             // Product added to cart successfully, show a success toast notification
  //             toast.success("Product added to cart successfully", {
  //               position: toast.POSITION.TOP_CENTER,
  //             });
  //             // Set cart to true after adding the product to the cart
  //             setCart(true);
  //             AddToCart(cartData);
  //           })
  //           .catch((error) => {
  //             console.error("Error adding product to cart:", error);
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error checking if product is in cart:", error);
  //     });
  // };

  return (
    <div
      style={{ display: cartVisible ? "block" : "none" }}
      id="cartSidebar"
      className="fixed top-0 right-0 z-40 w-64 h-screen overflow-y-auto duration-500 transition-all bg-[#fe5443]"
    >
      <div className="bg-white p-4 w-full">
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

      {/* Cart items */}
      {myCart.map((item) => (
        <div className="p-1.5 overflow-y-auto border border-white rounded-lg my-3 mx-1 relative">
          <span
            className="absolute top-1 right-1 bg-white p-1 text-[#fe5443] cursor-pointer text-xs rounded font-bold"
            onClick={() => handleDeletePost(item)}
          >
            <FaTrash></FaTrash>
          </span>
          {/* cart food */}
          <div className="py-1 font-medium flex gap-1 items-center">
            <img src={item.img} alt="" className="bg-gray-600 w-16 h-20" />
            {/* Quantity */}
            <div>
              <h3 className="text-sm font-bold text-white">{item.name}</h3>
              <p className="text-xs text-white">{item.category}</p>
              <div className="flex items-center mt-4 ">
                <button
                  className="bg-gray-300 px-2.5 py-1.5 rounded-l"
                  onClick={() => updateQuantity(-1, item)}
                >
                  -
                </button>
                <input
                  className="bg-white text-center py-2 w-10 text-xs"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="bg-gray-300 px-2 py-1.5 rounded-r"
                  onClick={() => updateQuantity(1, item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p className="text-white text-right font-bold -mt-3.5">
            {item.price * item.quantity}$
          </p>
        </div>
      ))}

      {/* Place Order */}
      <div className="bg-white p-5 w-full absolute bottom-0">
        <p className="text-[#fe5443] font-semibold text-center">
          Place Order: 25000$
        </p>
      </div>
    </div>
  );
};

export default Cart;
