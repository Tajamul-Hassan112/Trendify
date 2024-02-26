
import React from 'react';
import './LoginSignUp.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../Store';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

// Initialize Firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function for signing in with Google
const LoginSignUp = ({isLoggedin,setIsLoggedIn}) => {
  const navigate = useNavigate();

  const googleSign = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        // No explicit navigation needed, the anchor tag will handle it
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  const handleClick = () => {
    // Simulate successful login with toast notification
    toast.success("logged in successfully");
    // Navigate to the shop page
    navigate("/");
    setIsLoggedIn(true)
  };

  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>Sign In</h1>
        <div className="loginsignupfields">
          <input type="email" name="email" placeholder="Your Email Address" id="email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button onClick={handleClick}>Sign in</button>
        </div>
        <div className="remember-forgot">
          <label htmlFor="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            Remember me
          </label>
          <Link to={"/forgotpassword"}><a href="#">Forgot password</a></Link>
        </div>
        <hr />
        or
        <div className="email">
          <a className="google-signin-button" onClick={googleSign}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" />
            Sign In With Google
          </a>
        </div>
        <div className="loginsignup-agree">
          By creating this account, you agree to our Privacy Policy & Cookie Policy.
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
