// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import "./App.css"
// import {Routes,Route} from "react-router-dom"
// import Shop from './Pages/Shop/Shop'
// import ShopCategory from './Pages/ShopCategory/ShopCategory'
// import Product from './Pages/Product/Product'
// import Cart from './Pages/Cart/Cart'
// import LoginSignUp from './Pages/LoginSignUp/LoginSignUp'
// import Footer from './Components/Footer/Footer'
// import men_banner from "./Components/Assets/banner_mens.png"
// import womens_banner from "./Components/Assets/banner_women.png"
// import kids_banner from "./Components/Assets/banner_kids.png"
// const App = () => {
//   return (
//     <div>
      
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/mens' element={<ShopCategory   banner={men_banner} category="men"/>}/>
//         <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
//         <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
//         <Route path='/product ' element={<Product/>}/>
//         <Route path=':productId ' element={<Product/>}/>
//         <Route path='/cart ' element={<Cart/>}/>
//         <Route path='/loginsignup' element={<LoginSignUp/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default Appimport React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png";
import womens_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import SignUp from "./Pages/SignUp/SignUp"
import { useState } from 'react';
import Profile from './Pages/Profile/Profile';
import PaymentsPage from './Pages/PaymentsPage/PaymentsPage';

const App = () => {
  const[isLoggedin,setIsLoggedIn]=useState(false)
  return (
    <div>
      <Navbar  isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/product" element={<Product />} /> {/* This is the corrected route */}
        <Route path="/product/:productId" element={<Product />} /> {/* This is the corrected route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginsignup" element={<LoginSignUp isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp  sLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/paymentspage' element={<PaymentsPage/>}/>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
