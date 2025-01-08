import React from 'react';
import '../App.css';

const AdminPanel = () => {
  // Handlers for opening respective dashboards
  const handleRazorpayClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/1cQqHMsFtmx3xwYZfN_ihO-RyWQ3Z-xW7CukTwR-VMcQ/edit?gid=0#gid=0', '_blank');
  };

  const handleTidioClick = () => {
    window.open('https://www.tidio.com/panel/customers/visitors', '_blank');
  };

  const handleFirebaseClick = () => {
    window.open('https://console.firebase.google.com/u/0/project/authentication-5f7a6/authentication/users', '_blank');
  };

  return (
    <section className="admin-panel">
      <div className="panel-container">
        <h1 className="page-title">Admin Panel</h1>
        <p className="description">
          Manage your platform with the tools below. Click on a button to access the corresponding dashboard.
        </p>

        <div className="admin-buttons">
          <button 
            className="btn btn-primary razorpay-button" 
            onClick={handleRazorpayClick}
          >
            Click here to see  payment details
          </button>
          <p>Access payment records, revenue details, and transaction data.</p>

          <button 
            className="btn btn-primary tidio-button" 
            onClick={handleTidioClick}
          >
            Open Tidio Dashboard
          </button>
          <p>View and manage chats with customers in real time.</p>

          <button 
            className="btn btn-primary firebase-button" 
            onClick={handleFirebaseClick}
          >
            Open Firebase Console
          </button>
          <p>Track user data, manage databases, and monitor analytics.</p>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
