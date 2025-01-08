// import React from 'react';
// import { Check } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Import Link here

// const Pricing = () => {
//   const pricing = [
//     {
//       imgUrl: "/pricing.jpg",
//       title: "quarterly",
//       price: 18000,
//       length: 3,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "half_yearly",
//       price: 34000,
//       length: 6,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "yearly",
//       price: 67000,
//       length: 12,
//     },
//   ];

//   return (
//     <section className="pricing">
//       <h1>Fatafati</h1>
//       <div className="wrapper">
//         {pricing.map((element) => (
//           <div className="card" key={element.title}>
//             <img src={element.imgUrl} alt={element.title} />
//             <div className="title">
//               <h1>{element.title}</h1>
//               <h1>Package</h1>
//               <h3>Rs. {element.price}</h3>
//               <p>for {element.length} months</p>
//             </div>
//             <div className="description">
//               <p>
//                 <Check /> Equipment
//               </p>
//               <p>
//                 <Check /> All day Free training
//               </p>
//               <p>
//                 <Check /> 20 days Freezing option
//               </p>
//               <p>
//                 <Check /> 24/7 skilled support
//               </p>
//               <Link to="/">Join Now</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;



//right code before payment
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing = [
    { imgUrl: "/pricing.jpg", title: "quarterly", price: 18000, length: 3 },
    { imgUrl: "/pricing.jpg", title: "half_yearly", price: 34000, length: 6 },
    { imgUrl: "/pricing.jpg", title: "yearly", price: 67000, length: 12 },
  ];

  return (
    <section className="pricing">
      <h1>courses</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>Package</h1>
              <h3>Rs. {element.price}</h3>
              <p>for {element.length} months</p>
            </div>
            <div className="description">
              <p><Check /> Equipment</p>
              <p><Check /> All day Free training</p>
              <p><Check /> 20 days Freezing option</p>
              <p><Check /> 24/7 skilled support</p>
              <Link to="/payment">Join Now</Link> {/* Link to Payment Page */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;



// for razorpay

// import React, { useState } from 'react';
// import axios from 'axios';
// import QRCode from 'qrcode.react';
//  // Import QRCode component

// const Pricing = () => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   const pricing = [
//     { imgUrl: "/pricing.jpg", title: "quarterly", price: 18000, length: 3 },
//     { imgUrl: "/pricing.jpg", title: "half_yearly", price: 34000, length: 6 },
//     { imgUrl: "/pricing.jpg", title: "yearly", price: 67000, length: 12 },
//   ];

//   // Handle the payment and set the static Razorpay link for QR code generation
//   const handlePayment = () => {
//     const paymentLink = "https://rzp.io/rzp/yQL8cVd";  // Static Razorpay payment link
    
//     setQrCodeUrl(paymentLink);  // Set the payment link as the QR code source
//   };

//   return (
//     <section className="pricing">
//       <h1>Fatafati</h1>
//       <div className="wrapper">
//         {pricing.map((element) => (
//           <div className="card" key={element.title}>
//             <img src={element.imgUrl} alt={element.title} />
//             <div className="title">
//               <h1>{element.title}</h1>
//               <h1>Package</h1>
//               <h3>Rs. {element.price}</h3>
//               <p>for {element.length} months</p>
//             </div>
//             <div className="description">
//               <p>✔ Equipment</p>
//               <p>✔ All day Free training</p>
//               <p>✔ 20 days Freezing option</p>
//               <p>✔ 24/7 skilled support</p>
//               <button onClick={handlePayment}>Join Now</button>
//             </div>

//             {/* Display the QR code when it's generated */}
//             {qrCodeUrl && (
//               <div className="qr-code">
//                 <QRCode value={qrCodeUrl} size={200} />
//                 <p>Scan this QR code to make the payment</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;
