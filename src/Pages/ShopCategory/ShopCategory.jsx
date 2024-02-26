// import React, { useContext } from "react";
// import "./ShopCategory.css";
// import { ShopContext } from "../../Context/ShopContext";
// import dopdown_icon from "../../Components/Assets/dropdown_icon.png"
// import Item from "../../Components/Item/Item";
// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
//   return (
//     <div className="shop-category">
//       <img src={props.banner} alt="" className="shop-category-banner" />
//       <div className="shop-category-indexSort">
//         <p>
//           <span>Showing 1-12</span>
//           out of 36products
//         </p>
//         <div className="shop-category-sort">
//           Sort by <img src={dopdown_icon} alt="" />
//         </div>
//         <div className="shop-category-products">
//           {
//             all_product.map((item,index)=>{
//               if(props.category===item.category){
// return <Item   key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//               }
//               else{
//                 return null;
//               }
//             })
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;
import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import dropdownIcon from "../../Components/Assets/dropdown_icon.png";
import Item from "../../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category-container">
      <img src={props.banner} alt="" className="shop-category-banner" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdownIcon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product
          .filter((item) => props.category === item.category)
          .map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
