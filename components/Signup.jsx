
// import React, { useState } from 'react';
// import '../App.css'; // Ensure App.css is connected for styles
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [signupCompleted, setSignupCompleted] = useState(false);
//   const navigate = useNavigate();

  

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Simulate signup process with a timeout
//     setTimeout(() => {
//       setSignupCompleted(true);
//       alert('Signup successful!');
//       navigate('/'); // Redirect to home after successful signup
//     }, 2000);
//   };

//   return (
//     <section className="signup-page">
//       <div className="signup-container">
//         <h1 className="page-title">Create Your Account</h1>
//         <p className="description">Sign up to start your fitness journey with us.</p>

//         {/* Signup Form */}
//         <form className="signup-form" onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" placeholder="Enter your username" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input type="email" id="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" placeholder="Enter your password" required />
//           </div>

//           <button type="submit" className="btn btn-primary">Sign Up</button>
//         </form>

//         {/* Success Notification */}
//         {signupCompleted && (
//           <div className="signup-success">
//             <p>Your account has been created successfully!</p>
//           </div>
//         )}

//         <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
//       </div>
//     </section>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import './App.css'; // Make sure your CSS file is correctly imported
// import { Link, useNavigate } from 'react-router-dom';
// import { app } from './firebase';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signupCompleted, setSignupCompleted] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await app.auth().createUserWithEmailAndPassword(email, password);
//       setSignupCompleted(true);
//       alert('Signup successful!');
//       setTimeout(() => navigate('/'), 2000); // Redirect to home after 2 seconds
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <section className="signup-page">
//       <div className="signup-container">
//         <h1 className="page-title">Create Your Account</h1>
//         <p className="description">Sign up to start your fitness journey with us.</p>

//         {/* Signup Form */}
//         <form className="signup-form" onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">Sign Up</button>
//         </form>

//         {/* Success Notification */}
//         {signupCompleted && (
//           <div className="signup-success">
//             <p>Your account has been created successfully!</p>
//           </div>
//         )}

//         <p className="login-link">
//           Already have an account? <Link to="/login">Log in</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Signup;

// firebase implementation
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import auth directly
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  const [signUpCompleted, setSignUpCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Trim input values
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (trimmedPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Create user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      setSignUpCompleted(true);
      alert("Account created successfully!");
    } catch (err) {
      console.error(err);

      // Friendly error messages
      let errorMessage = "An error occurred during sign-up.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      }

      alert(errorMessage);
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-container">
        <h1 className="page-title">Create an Account</h1>
        <p className="description">Fill in the form below to sign up for a new account.</p>

        {/* Sign-Up Form */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>

        {/* Success Notification */}
        {signUpCompleted && (
          <div className="signup-success">
            <p>Your account has been created successfully!</p>
            <Link to="/login" className="btn btn-secondary">
              Go to Login
            </Link>
          </div>
        )}

        <p className="redirect-message">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
