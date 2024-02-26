// import React, { useContext } from 'react'
// import { ShopContext } from '../../Context/ShopContext'
// import {useParams} from "react-router-dom"
// import all_product from '../../Components/Assets/all_product'
// import BreadCrums from '../../Components/BreadCrums/BreadCrums'
// import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'


// const Product = () => {
//   const{productId}=useParams()
//   const  product = all_product.find((e)=>e.id===Number(productId));
//   const {all_product}=useContext(ShopContext)
  
//   return (
//     <div>
//       <BreadCrums product={product}/>
//       <ProductDisplay product={product}/>
//     </div>
//   )
// }

// export default Product
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import all_product from '../../Components/Assets/all_product';
import BreadCrumbs from  "../../Components/BreadCrums/BreadCrums"
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  // Find the product by ID after accessing all_product from the context
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
