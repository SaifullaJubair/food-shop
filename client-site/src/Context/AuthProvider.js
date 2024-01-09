import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // useState
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartRefetch, setCartRefetch] = useState(false);

  const AddToCart = (data) => {
    setCart([...cart, data]);
    localStorage.setItem("MyCart", JSON.stringify([...cart, data]));
  };

  const getLocalStorageCartData = () => {
    const localStorageData = localStorage.getItem("MyCart") || [];
    if (localStorageData.length > 0) {
      setCart(JSON.parse(localStorageData));
    }
  };

  const removeProductCart = (data) => {
    const filterData = cart.filter((d) => d?.productId != data?.productId);
    setCart([...filterData]);
    localStorage.setItem("MyCart", JSON.stringify([...filterData]));
  };

  const handleQuantity = (data) => {
    console.log(data);
    const newProducts = cart.map((d) => {
      return {
        ...d,
        quantity:
          // d.productId === data.productId ? d.quantity + data.qty : d.quantity,

          d.productId === data.productId ? data.qty : d.quantity,
      };
    });
    setCart(newProducts);
    localStorage.setItem("MyCart", JSON.stringify([...newProducts]));
  };
  const authInfo = {
    cart,
    AddToCart,
    getLocalStorageCartData,
    removeProductCart,
    handleQuantity,
    cartRefetch,
    setCartRefetch,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
