import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); 
    try {
      const { email, password } = formData;
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up successfully");
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      toast.error("Error signing up: " + error.message);
      console.error('Error signing up:', error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password === confirmPassword) {
      handleSignUp(e); // Pass the event object 'e' here
    } else {
      toast.error("Passwords don't match");
    }
  };
  

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with Google successfully!');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with GitHub successfully!');
    } catch (error) {
      console.error('Error signing in with GitHub:', error.message);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-6 border rounded shadow">
      <h2 className="text-center text-3xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border rounded w-full col-span-2"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
            className="p-3 border rounded w-full"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="p-3 border rounded w-full"
            required
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className=" hover:bg-green-600 text-white bg-slate-500 font-semibold py-2 px-4 rounded" onClick={handleClick}>
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center mt-4">Or</div>
      <div className="text-center mt-4 space-x-4">
        <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
        </button>
        <button onClick={handleGitHubSignIn} className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
          <FontAwesomeIcon icon={faGithub} /> Sign Up with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignUp;
