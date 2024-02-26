// // import React from 'react'
// // import "./Hero.css"
// // import hand_icon from "../Assets/hand_icon.png"
// // import arrow_icon from "../Assets/arrow.png"
// // import hero_image from "../Assets/hero.png"
// // const Hero = () => {
// //   return (
// //     <div className='hero'>
// // <div className="hero-left">
// //     <h2>NEW ARRIVALS ONLY</h2>
// //     <div>
// //         <div className='hero-hand-icon'>
// // <p>new</p>
// // <img src={hand_icon} alt="" />
// //         </div>
// //         <p>Collections</p>
// //         <p>For Everyone</p>
// //     </div>
// //     <div className="hero-latest-btn">
// //         <div>latest collection</div>
// //         <img src={arrow_icon} alt="" />
// //     </div>
// // </div>
// // <div className="hero-right"></div>
// // <img src={hero_image} alt="" />
// //     </div>
// //   )
// // }

// // export default Hero
// import React from 'react';
// import { FaTshirt } from 'react-icons/fa';
// import "./Hero.css";
// import arrow_icon from "../Assets/arrow.png";
// import hero_image from "../Assets/hero.png";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>DISCOVER THE LATEST TRENDS IN FASHION <FaTshirt /></h2>
//         <p>Explore our new arrivals to find the perfect style for everyone.</p>
//         <button className="explore-btn">Explore Now <img src={arrow_icon} alt="arrow" /></button>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="hero" />
//       </div>
//     </div>
//   );
// }

// export default Hero;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTshirt } from '@fortawesome/free-solid-svg-icons'; // Import the T-shirt icon
// import "./Hero.css";
// import arrow_icon from "../Assets/arrow.png";
// import hero_image from "../Assets/hero.jpg";

// const Hero = () => {
//   return (
//     <div className="hero">
   
//       <div className="hero-right">
//         <img src={hero_image} alt="hero" />
//       </div>
//     </div>
//   );
// }

// export default Hero;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTshirt } from '@fortawesome/free-solid-svg-icons'; // Import the T-shirt icon
// import "./Hero.css";
// import arrow_icon from "../Assets/arrow.png";
// import hero_image from "../Assets/hero.jpg";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-content">
//         <h2>Welcome to Your Style Haven</h2>
//         <p>Discover the latest trends in fashion and express your unique style with our curated collection.</p>
//         <button className="explore-btn">Explore Now <img src={arrow_icon} alt="Arrow" /></button>
//       </div>
     
//     </div>
//   );
// }

// export default Hero;
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import "./Hero.css";
import hero_image from "../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Welcome to Your Style Haven
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the latest trends in fashion and express your unique style with our curated collection.
        </motion.p>
        <motion.button 
          className="explore-btn"
          whileHover={{ scale: 1.05 }}
        >
          Explore Now <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
