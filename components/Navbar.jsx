
// import React, { useState } from 'react';
// import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling
// import { useNavigate } from 'react-router-dom'; // For navigation between pages

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate(); // Hook for navigation

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const goToAdmin = () => {
//     navigate('/admin'); // Navigate to the admin page
//   };

//   return (
//     <header className="navbar">
//       <div className="logo" onClick={() => navigate('/')}>Iron</div>
     
//       <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <Link to="home" smooth={true} duration={500}>Home</Link>
//         <Link to="features" smooth={true} duration={500}>Features</Link>
//         <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
//         <Link to="bmi" smooth={true} duration={500}>BMI Calculator</Link>
//         <Link to="contact" smooth={true} duration={500}>Contact</Link>
//         <Link to="pricing" smooth={true} duration={500}>Courses</Link>
//         <span className="admin-link" onClick={goToAdmin}>Admin</span> {/* Admin link */}
//       </nav>
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
//         <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
//         <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling
import { useNavigate } from 'react-router-dom'; // For navigation between pages

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToAdmin = () => {
    navigate('/admin'); // Navigate to the admin page
  };

  const handleLogout = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate('/')}>Iron</div>
     
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="features" smooth={true} duration={500}>Features</Link>
        <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
        <Link to="bmi" smooth={true} duration={500}>BMI Calculator</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link to="pricing" smooth={true} duration={500}>Courses</Link>
        <span className="admin-link" onClick={goToAdmin}>Admin</span> {/* Admin link */}
        <span className="logout-link" onClick={handleLogout}>Logout</span> {/* Logout link */}
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
        <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
        <span className={`bar ${isOpen ? 'rotate' : ''}`}></span>
      </div>
    </header>
  );
};

export default Navbar;
