import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import {toast} from "react-hot-toast"
const ProductDisplay = (props) => {
  const handleAddToCart=()=>{
    addToCart(product.id)
      toast.success("item added to the cart")
  }
  const { product } = props;
const {addToCart}=useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-imagelist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-image">
          <img src={product.image} className="product-display-mainimg" alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="prdouctdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-rght-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-rght-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplayright-description"></div>
          <div className="productdisplayright-size">
            <h1>Select Size</h1>
          </div>
          <div className="product-dsipaly-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        <p className="productdisplay-right-category">
            <span>category : </span>Women,T-shirts, Crop Top
        </p>
        <p className="productdisplay-right-category">
            <span>Tags : </span>Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
