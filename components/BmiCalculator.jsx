// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const BMICalculator = () => {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [bmi, setBmi] = useState("");

//   const calculateBMI = (e) => {
//     e.preventDefault();

//     if (!height || !weight || !gender) {
//       toast.error("Please enter valid height, weight, and gender.");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBmi(bmiValue);

//     if (bmiValue < 18.5) {
//       toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       toast.success("You have a normal weight. Keep maintaining a healthy lifestyle.");
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
//     } else {
//       toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
//     }
//   };

//   return (
//     <section className="bmi">
//       <h1>BMI CALCULATOR</h1>
//       <div className="container">
//         <div className="wrapper">
//           <form onSubmit={calculateBMI}>
//             <div>
//               <label>Height (cm)</label>
//               <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
//             </div>
//             <div>
//               <label>Weight (kg)</label>
//               <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
//             </div>
//             <div>
//               <label>Gender</label>
//               <select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//             <button type="submit">Calculate BMI</button>
//           </form>
//         </div>
//         <div className="wrapper">
//           <img src="/bmi.jpg" alt="BMI illustration" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BMICalculator;

import React, { useState } from "react";
import { toast } from "react-toastify";

// Helper function for text-to-speech
const speakMessage = (message) => {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US"; // Set the language
  window.speechSynthesis.speak(speech);
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      const message = "Please enter valid height, weight, and gender.";
      toast.error(message);
      speakMessage(message);
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let message = "";
    if (bmiValue < 18.5) {
      message =
        "You are underweight. Consider seeking advice from a healthcare provider.";
      toast.warning(message);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      message =
        "You have a normal weight. Keep maintaining a healthy lifestyle.";
      toast.success(message);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      message =
        "You are overweight. Consider seeking advice from a healthcare provider.";
      toast.warning(message);
    } else {
      message =
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.";
      toast.error(message);
    }

    // Trigger the voice notification
    speakMessage(message);
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI illustration" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;


