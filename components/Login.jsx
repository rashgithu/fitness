// // src/components/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../App.css'; // Ensure App.css is connected for styles

// const Login = () => {
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simulate login process with a timeout
//     setTimeout(() => {
//       setLoginSuccessful(true);
//       alert('Login successful!');
//       navigate('/'); // Redirect to home after successful login
//     }, 2000);
//   };

//   return (
//     <section className="login-page">
//       <div className="login-container">
//         <h1 className="page-title">Log In to Your Account</h1>
//         <p className="description">Welcome back! Please enter your credentials to log in.</p>

//         {/* Login Form */}
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input type="email" id="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" placeholder="Enter your password" required />
//           </div>

//           <button type="submit" className="btn btn-primary">Log In</button>
//         </form>

//         {/* Success Notification */}
//         {loginSuccessful && (
//           <div className="login-success">
//             <p>You have successfully logged in!</p>
//           </div>
//         )}

//         {/* Signup Link */}
//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;
//firebase1
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../App.css'; // Ensure App.css is connected for styles
// import axios from 'axios'; // Import Axios for HTTP requests

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const userData = { email, password };

//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', userData);
//       setLoginSuccessful(true);
//       alert('Login successful!');
//       localStorage.setItem('token', response.data.token); // Store token for future authentication
//       navigate('/'); // Redirect to home after successful login
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//       setLoginSuccessful(false);
//     }
//   };

//   return (
//     <section className="login-page">
//       <div className="login-container">
//         <h1 className="page-title">Log In to Your Account</h1>
//         <p className="description">Welcome back! Please enter your credentials to log in.</p>

//         {/* Login Form */}
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter your email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input 
//               type="password" 
//               id="password" 
//               placeholder="Enter your password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">Log In</button>
//         </form>

//         {/* Success or Error Notification */}
//         {loginSuccessful && (
//           <div className="login-success">
//             <p>You have successfully logged in!</p>
//           </div>
//         )}

//         {error && (
//           <div className="login-error">
//             <p>{error}</p>
//           </div>
//         )}

//         {/* Signup Link */}
//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;

//firebase2
 
// import { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';  // Correct import
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     try {
//       // Firebase login
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       setLoginSuccessful(true);
//       alert('Login successful!');
//       navigate('/');
//     } catch (err) {
//       // Handle Firebase specific errors
//       if (err.code === 'auth/invalid-email') {
//         setError('Invalid email address format.');
//       } else if (err.code === 'auth/wrong-password') {
//         setError('Incorrect password.');
//       } else if (err.code === 'auth/user-not-found') {
//         setError('No user found with this email.');
//       } else {
//         setError('Login failed. Please try again.');
//       }
//       setLoginSuccessful(false);
//     }
//   };

//   return (
//     <section className="login-page">
//       <div className="login-container">
//         <h1 className="page-title">Log In to Your Account</h1>
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter your email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input 
//               type="password" 
//               id="password" 
//               placeholder="Enter your password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Log In</button>
//         </form>

//         {loginSuccessful && <div className="login-success">You have successfully logged in!</div>}
//         {error && <div className="login-error">{error}</div>}

//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';  // Import Link here
// import '../App.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     const userData = { email, password };

//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', userData);

//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         setLoginSuccessful(true);
//         alert('Login successful!');
//         navigate('/');
//       } else {
//         setError('No token received. Login failed.');
//       }
//     } catch (err) {
//       if (err.response && err.response.data) {
//         setError(err.response.data.message || 'Login failed');
//       } else {
//         setError('Server error. Please try again later.');
//       }
//       setLoginSuccessful(false);
//     }
//   };

//   return (
//     <section className="login-page">
//       <div className="login-container">
//         <h1 className="page-title">Log In to Your Account</h1>
//         <p className="description">Welcome back! Please enter your credentials to log in.</p>

//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter your email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input 
//               type="password" 
//               id="password" 
//               placeholder="Enter your password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">Log In</button>
//         </form>

//         {loginSuccessful && (
//           <div className="login-success">
//             <p>You have successfully logged in!</p>
//           </div>
//         )}

//         {error && (
//           <div className="login-error">
//             <p>{error}</p>
//           </div>
//         )}

//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;

//right one
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';  // Import Link here
// import '../App.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');  // Add email state
//   const [password, setPassword] = useState('');
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Ensure both email and password are not empty
//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     const userData = { email, password };  // Include email in user data

//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', userData);

//       if (response.data.success) {
//         setLoginSuccessful(true);
//         alert('Login successful!');
//         navigate('/');
//       } else {
//         setError(response.data.message || 'Login failed');
//       }
//     } catch (err) {
//       if (err.response && err.response.data) {
//         setError(err.response.data.message || 'Login failed');
//       } else {
//         setError('Server error. Please try again later.');
//       }
//       setLoginSuccessful(false);
//     }
//   };

//   return (
//     <section className="login-page">
//       <div className="login-container">
//         <h1 className="page-title">Log In to Your Account</h1>
//         <p className="description">Welcome back! Please enter your credentials to log in.</p>

//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter your email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input 
//               type="password" 
//               id="password" 
//               placeholder="Enter your password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">Log In</button>
//         </form>

//         {loginSuccessful && (
//           <div className="login-success">
//             <p>You have successfully logged in!</p>
//           </div>
//         )}

//         {error && (
//           <div className="login-error">
//             <p>{error}</p>
//           </div>
//         )}

//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;



// firebase intigration
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link here
import "../App.css";
import { auth } from "../firebase"; // Import auth from Firebase setup
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password fields
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // Use Firebase Authentication for login
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      alert("Login successful!");
      setError(""); // Clear any previous error
      navigate("/"); // Redirect to home page
    } catch (err) {
      console.error("Login error:", err);
      // Handle Firebase error messages
      let errorMessage = "Failed to log in. Please try again.";
      if (err.code === "auth/user-not-found") {
        errorMessage = "No user found with this email.";
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }
      setError(errorMessage); // Display user-friendly error
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <h1 className="page-title">Log In to Your Account</h1>
        <p className="description">Welcome back! Please enter your credentials to log in.</p>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}>
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
            Log In
          </button>
        </form>

        {/* Error Notification */}
        {error && (
          <div className="login-error">
            <p>{error}</p>
          </div>
        )}

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
