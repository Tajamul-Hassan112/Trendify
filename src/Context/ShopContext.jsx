// import React, { createContext, useState } from "react";
// export const ShopContext=createContext(null)
// import all_product from "../Components/Assets/all_product"
// const emptyCart=()=>{
//     let cart={}
//     //to make the key value pair for each product
//      for(let index=0 ;index < all_product.length+1; index++){
//         cart[index]=0
// }
// return cart;
// }
// const ShopContextProvider=(props)=>{

// const[cartItems,setCartitems]=useState(emptyCart())

// const addToCart=(itemId)=>{
// setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
// }
// console.log(cartItems);
// const removeFromCart=(itemId)=>{
//     setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//           if (cartItems[item] > 0) {
//             let itemInfo = all_product.find((product) => product.id === Number(item));
//             totalAmount += itemInfo.new_price * cartItems[item];
//           }
//         }
//         return totalAmount;
//       };
      


//     const value={all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount}
// return  (

// <ShopContext.Provider value={value}>
//     {props.children}
// </ShopContext.Provider>
// )
// }
// export default ShopContextProvider;
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const emptyCart = () => {
  let cart = {};
  //to make the key value pair for each product
  for (let index = 0; index < all_product.length; index++) {
    cart[index + 1] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(emptyCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] += 1;
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const value = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
