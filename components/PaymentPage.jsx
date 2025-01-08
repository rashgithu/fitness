// // src/components/PaymentPage.jsx
// import React, { useState } from 'react';
// import '../App.css';  // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [paymentCompleted, setPaymentCompleted] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handlePayment = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Get payment details from the form
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const paymentMethod = e.target['payment-method'].value;
//     const cardNumber = e.target['card-number'].value;
//     const expiryDate = e.target['expiry-date'].value;
//     const cvv = e.target.cvv.value;

//     // Simulate a payment processing delay
//     setIsProcessing(true);
//     setTimeout(() => {
//       // Simulate money transfer and log the details
//       console.log(`Payment Details: 
//         Name: ${name}
//         Email: ${email}
//         Payment Method: ${paymentMethod}
//         Card Number: ${cardNumber} (last 4 digits hidden for security)
//         Expiry Date: ${expiryDate}
//         CVV: ${cvv} (hidden for security)
//       `);

//       // Mark payment as completed
//       setPaymentCompleted(true);
//       setIsProcessing(false);
//       alert("Payment completed successfully!");

//     }, 2000); // Simulate a delay for the payment
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">Enter your payment details below to complete the registration.</p>

//         {/* Payment Form */}
//         <form className="payment-form" onSubmit={handlePayment}>
//           <div className="form-group">
//             <label htmlFor="name">Full Name:</label>
//             <input type="text" id="name" name="name" placeholder="Enter your full name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="payment-method">Payment Method:</label>
//             <select id="payment-method" name="payment-method" required>
//               <option value="credit-card">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Bank Transfer</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="card-number">Card Number:</label>
//             <input type="text" id="card-number" name="card-number" placeholder="Enter card number" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="expiry-date">Expiry Date:</label>
//             <input type="month" id="expiry-date" name="expiry-date" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="cvv">CVV:</label>
//             <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required />
//           </div>

//           <button type="submit" className="btn btn-primary" disabled={isProcessing}>
//             {isProcessing ? "Processing..." : "Complete Payment"}
//           </button>
//         </form>

//         {/* Success Notification */}
//         {paymentCompleted && (
//           <div className="payment-success">
//             <p>Your payment has been successfully completed!</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;



// src/components/PaymentPage.jsx
// import React, { useState } from 'react';
// import '../App.css';  // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handlePayment = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Set the processing state to true
//     setIsProcessing(true);

//     // Redirect to Razorpay payment link (use your demo link here)
//     const razorpayLink = "https://rzp.io/rzp/yQL8cVd"; // Replace with your actual Razorpay link

//     // Redirect to the Razorpay link
//     window.location.href = razorpayLink;
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">Enter your payment details below to complete the registration.</p>

//         {/* Payment Form */}
//         <form className="payment-form" onSubmit={handlePayment}>
//           <div className="form-group">
//             <label htmlFor="name">Full Name:</label>
//             <input type="text" id="name" name="name" placeholder="Enter your full name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="payment-method">Payment Method:</label>
//             <select id="payment-method" name="payment-method" required>
//               <option value="credit-card">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Bank Transfer</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="card-number">Card Number:</label>
//             <input type="text" id="card-number" name="card-number" placeholder="Enter card number" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="expiry-date">Expiry Date:</label>
//             <input type="month" id="expiry-date" name="expiry-date" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="cvv">CVV:</label>
//             <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required />
//           </div>

//           <button type="submit" className="btn btn-primary" disabled={isProcessing}>
//             {isProcessing ? "Processing..." : "Complete Payment"}
//           </button>
//         </form>

//         {/* Success Notification */}
//         {/* Success message is not necessary anymore since payment will be handled by Razorpay */}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;



// src/components/PaymentPage.jsx
// src/components/PaymentPage.jsx
// import React, { useState } from 'react';
// import '../App.css';  // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false); // State to control confirmation dialog

//   const handleConfirmPayment = () => {
//     setShowConfirmation(true); // Show confirmation dialog after the user opts to proceed
//   };

//   const handlePayment = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Set the processing state to true
//     setIsProcessing(true);

//     // Redirect to Razorpay payment link (use your demo link here)
//     const razorpayLink = "https://rzp.io/rzp/OjCNveI"; // Replace with your actual Razorpay link

//     // Redirect to the Razorpay link
//     window.location.href = razorpayLink;
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">Enter your payment details below to complete the registration.</p>

//         {/* Payment Form */}
//         {!showConfirmation ? (
//           <div>
//             <p>Enter your payment details to proceed:</p>
//             <button 
//               type="button" 
//               className="btn btn-primary"
//               onClick={handleConfirmPayment}>
//               Proceed to Payment
//             </button>
//           </div>
//         ) : (
//           <div className="payment-confirmation">
//             <p>Are you sure you want to proceed with the payment?</p>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={handlePayment}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Complete Payment"}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => setShowConfirmation(false)} // Hide confirmation dialog and reset form
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;


//firebase implementation
// import React, { useState } from "react";
// import "../App.css"; // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Validate the form data
//     if (
//       formData.name &&
//       formData.address &&
//       formData.phone &&
//       formData.email
//     ) {
//       alert("Details saved successfully! Proceed to payment.");
//       setShowConfirmation(true);
//     } else {
//       alert("Please fill out all the fields.");
//     }
//   };

//   const handlePayment = () => {
//     setIsProcessing(true);

//     // Redirect to Razorpay payment link (use your Razorpay link)
//     const razorpayLink = "https://rzp.io/rzp/OjCNveI"; // Replace with your actual Razorpay link
//     window.location.href = razorpayLink;
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">
//           Fill in your details below to proceed with the payment.
//         </p>

//         {/* Form for User Details */}
//         {!showConfirmation ? (
//           <form onSubmit={handleFormSubmit} className="user-details-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Save Details & Proceed
//             </button>
//           </form>
//         ) : (
//           <div className="payment-confirmation">
//             <p>Are you sure you want to proceed with the payment?</p>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={handlePayment}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Complete Payment"}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => setShowConfirmation(false)} // Go back to the form
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;


// kayda
// import React, { useState } from "react";
// import "../App.css"; // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//   });
//   const [uploadedImage, setUploadedImage] = useState(null); // State to hold the uploaded image
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUploadedImage(reader.result); // Set the image as a data URL
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Validate the form data
//     if (
//       formData.name &&
//       formData.address &&
//       formData.phone &&
//       formData.email
//     ) {
//       alert("Details saved successfully! Proceed to payment.");
//       setShowConfirmation(true);
//     } else {
//       alert("Please fill out all the fields.");
//     }
//   };

//   const handlePayment = () => {
//     setIsProcessing(true);

//     // Redirect to Razorpay payment link (use your Razorpay link)
//     const razorpayLink = "https://rzp.io/rzp/OjCNveI"; // Replace with your actual Razorpay link
//     window.location.href = razorpayLink;
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">
//           Fill in your details below to proceed with the payment.
//         </p>

//         {/* Form for User Details */}
//         {!showConfirmation ? (
//           <form onSubmit={handleFormSubmit} className="user-details-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             {/* Image Upload Field */}
//             <div className="form-group">
//               <label htmlFor="image">Upload Image</label>
//               <input
//                 type="file"
//                 id="image"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="form-control"
//               />
//             </div>

//             {/* Image Preview */}
//             {uploadedImage && (
//               <div className="image-preview">
//                 <p>Uploaded Image:</p>
//                 <img src={uploadedImage} alt="Preview" className="preview-image" />
//               </div>
//             )}

//             <button type="submit" className="btn btn-primary">
//               Save Details & Proceed
//             </button>
//           </form>
//         ) : (
//           <div className="payment-confirmation">
//             <p>Are you sure you want to proceed with the payment?</p>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={handlePayment}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Complete Payment"}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => setShowConfirmation(false)} // Go back to the form
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;

//kayda again
// import React, { useState } from "react"; 
// import "../App.css"; // Ensure App.css is connected for styles

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form data
//     if (formData.name && formData.address && formData.phone && formData.email) {
//       try {
//         // Send data to the SheetDB API
//         const response = await fetch("https://sheetdb.io/api/v1/2nec603bu3hwx", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             data: {
//               Name: formData.name,
//               Address: formData.address,
//               Phone: formData.phone,
//               Email: formData.email,
//             },
//           }),
//         });

//         if (response.ok) {
//           const result = await response.json();
//           console.log("Data saved successfully:", result);
//           alert("Details saved successfully! Proceed to payment.");
//           setShowConfirmation(true);
//         } else {
//           console.error("Failed to save data:", response.statusText);
//           alert("An error occurred while saving your details.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred while saving your details.");
//       }
//     } else {
//       alert("Please fill out all the fields.");
//     }
//   };

//   const handlePayment = () => {
//     setIsProcessing(true);

//     // Redirect to Razorpay payment link (use your Razorpay link)
//     const razorpayLink = "https://rzp.io/rzp/OjCNveI"; // Replace with your actual Razorpay link
//     window.location.href = razorpayLink;
//   };

//   return (
//     <section className="payment-page">
//       <div className="payment-container">
//         <h1 className="page-title">Complete Your Payment</h1>
//         <p className="description">
//           Fill in your details below to proceed with the payment.
//         </p>

//         {/* Form for User Details */}
//         {!showConfirmation ? (
//           <form onSubmit={handleFormSubmit} className="user-details-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Save Details & Proceed
//             </button>
//           </form>
//         ) : (
//           <div className="payment-confirmation">
//             <p>Are you sure you want to proceed with the payment?</p>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={handlePayment}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Complete Payment"}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => setShowConfirmation(false)} // Go back to the form
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PaymentPage; 

import React, { useState } from "react";
import "../App.css"; // Ensure your styles are properly linked

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Validate the form data
    if (formData.name && formData.address && formData.phone && formData.email) {
      try {
        // Send data to the SheetDB API
        const response = await fetch("https://sheetdb.io/api/v1/2nec603bu3hwx", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              Name: formData.name,
              Address: formData.address,
              Phone: formData.phone,
              Email: formData.email,
            },
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Data saved successfully:", result);
          alert("Details saved successfully! Proceed to payment.");
          setShowConfirmation(true);
        } else {
          console.error("Failed to save data:", response.statusText);
          alert("An error occurred while saving your details.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving your details.");
      }
    } else {
      alert("Please fill out all the fields.");
    }
  };

  // Handle payment redirection
  const handlePayment = () => {
    setIsProcessing(true);
    // Redirect to Razorpay payment link (use your Razorpay link)
    const razorpayLink = "https://rzp.io/rzp/QJGSfAka"; // Replace with your actual Razorpay link
    window.location.href = razorpayLink;
  };

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h1 className="page-title">Complete Your Payment</h1>
        <p className="description">
          Fill in your details below to proceed with the payment.
        </p>
        {/* Form for User Details */}
        {!showConfirmation ? (
          <form onSubmit={handleFormSubmit} className="user-details-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Details & Proceed
            </button>
          </form>
        ) : (
          <div className="payment-confirmation">
            <p>Are you sure you want to proceed with the payment?</p>
            <button
              type="button"
              className="btn btn-success"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Complete Payment"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowConfirmation(false)} // Go back to the form
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentPage;
