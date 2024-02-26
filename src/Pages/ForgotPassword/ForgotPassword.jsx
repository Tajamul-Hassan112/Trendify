// import React, { useState } from 'react'
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// import { app } from '../../Store';
// import "./ForgotPassword.css"
// import { Link } from 'react-router-dom';

// const auth = getAuth(app);
// const ForgotPassword = () => {
//     const [email,setEmail]=useState(" ")
//     const handleResetPassword=()=>{
//         sendPasswordResetEmail(auth, email)
        
//     }
//   return (
//     <div>
//       <h2>Forgot Password</h2>
      
     
//       <input
//         type="email"
//         placeholder="Enter your email address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleResetPassword}>Reset Password</button>
     
        
//         <Link to={"/loginsignup"}>Back to Login</Link>
      
//     </div>
//   )
// }

// export default ForgotPassword
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../Store';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const auth = getAuth(app);

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent successfully.');
      })
      .catch((error) => {
        alert('Error sending password reset email: ' + error.message);
      });
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <div className="input-group">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>

      <Link className="link" to="/loginsignup">
        Back to Login
      </Link>
    </div>
  );
};

export default ForgotPassword;
