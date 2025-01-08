// // src/components/ChatBotPage.jsx
// import React, { useState } from "react";
// import "../App.css"; // Ensure App.css is connected for styles

// const ChatBotPage = () => {
//   const [userMessage, setUserMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Expanded responses based on common keywords
//   const responses = {
//     hello: "Hello! How can I help you with your fitness goals?",
//     yoga: "Yoga is excellent for flexibility and mental relaxation. Start with basic poses like Mountain, Warrior, and Child’s Pose.",
//     workout: "A balanced workout includes cardio, strength training, and flexibility exercises. Aim for variety to stay engaged!",
//     diet: "A balanced diet should include proteins, carbs, fats, vitamins, and minerals. Avoid too much processed food.",
//     cardio: "Cardio, like jogging, cycling, and swimming, is great for heart health and burning calories. Aim for 30 minutes 3-5 times a week.",
//     strength: "Strength training helps build muscle and improve metabolism. Squats, deadlifts, and push-ups are good for beginners.",
//     protein: "Protein is essential for muscle recovery and growth. Good sources include chicken, tofu, beans, and eggs.",
//     flexibility: "Stretching and yoga can improve flexibility and reduce injury risk. Try stretching after workouts for better results.",
//     "lose weight": "To lose weight, focus on a calorie deficit through diet and regular exercise. Drink plenty of water and stay consistent!",
//     "gain muscle": "For muscle gain, eat a protein-rich diet and focus on strength training. Compound exercises like bench press and squats are effective.",
//     meditation: "Meditation helps reduce stress and improves focus. Start with 5 minutes of deep breathing exercises daily.",
//     hydration: "Staying hydrated is key, especially during workouts. Aim for at least 8 glasses of water daily.",
//     sleep: "Good sleep supports muscle recovery and overall health. Aim for 7-9 hours each night.",
//     warmup: "Warm-ups prepare your body for exercise. Try dynamic stretches like leg swings and arm circles before working out.",
//     "cool down": "Cooling down after exercise helps prevent soreness. Try gentle stretching or a slow walk after your workout.",
//     recovery: "Recovery is as important as training. Rest days, good sleep, and protein intake aid in muscle recovery.",
//     supplements: "Common supplements include protein powder, creatine, and BCAAs. Always consult a professional before starting any.",
//     "muscle soreness": "Muscle soreness after a workout is normal. Light stretching and staying hydrated can help reduce it.",
//     "home workout": "Bodyweight exercises like squats, push-ups, and lunges are great for home workouts. No equipment needed!",
//     motivation: "Set realistic goals and track your progress. Working out with a friend can also keep you motivated!",
//     calories: "Tracking calories can help with weight goals. Aim to eat nutrient-dense foods rather than just counting calories.",
//     "personal trainer": "A personal trainer can help create a personalized workout plan and guide you on proper form.",
//     "gym membership": "Our gym offers flexible membership options. Check with the front desk for current packages and prices!",
//     "beginner exercises": "For beginners, focus on basic movements like squats, push-ups, and planks to build a strong foundation.",
//   };

//   // Function to generate a bot response based on user input
//   const getBotResponse = (message) => {
//     // Look for keywords in the user's message
//     const lowercaseMessage = message.toLowerCase();
//     for (let keyword in responses) {
//       if (lowercaseMessage.includes(keyword)) {
//         return responses[keyword];
//       }
//     }
//     // Default response if no keywords match
//     return "I'm here to help! Can you please rephrase or ask something specific related to fitness or wellness?";
//   };

//   // Function to handle user input and bot response
//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!userMessage) return; // Prevent sending empty message

//     // Add the user message to the chat history
//     setChatHistory([
//       ...chatHistory,
//       { sender: "user", message: userMessage },
//     ]);
//     setLoading(true); // Start the loading animation for bot response

//     // Simulate bot response after a short delay
//     setTimeout(() => {
//       const botResponse = getBotResponse(userMessage);
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         { sender: "bot", message: botResponse },
//       ]);
//       setLoading(false); // Stop loading animation after response
//       setUserMessage(""); // Clear the input field
//     }, 1500); // Delay for bot response (simulating typing)
//   };

//   return (
//     <section className="chatbot-page">
//       <div className="chat-container">
//         <h1 className="page-title">Chat with Jerry</h1>
//         <div className="chat-history">
//           {chatHistory.map((chat, index) => (
//             <div
//               key={index}
//               className={`chat-message ${chat.sender === "user" ? "user" : "bot"}`}
//             >
//               <strong>{chat.sender === "user" ? "You" : "Bot"}:</strong> {chat.message}
//             </div>
//           ))}
//           {loading && (
//             <div className="chat-message bot typing">
//               <strong>Bot:</strong> Typing...
//             </div>
//           )}
//         </div>

//         <form className="chat-form" onSubmit={sendMessage}>
//           <div className="form-group">
//             <input
//               type="text"
//               id="userMessage"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               placeholder="Type your message here..."
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ChatBotPage;

// import React, { useState } from "react";
// import "../App.css"; // Ensure the styles are correctly imported

// const ChatBotPage = () => {
//   const [userMessage, setUserMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Expanded responses based on common keywords
//   const responses = {
//     hello: "Hello! How can I help you with your fitness goals?",
//     yoga: "Yoga is excellent for flexibility and mental relaxation. Start with basic poses like Mountain, Warrior, and Child’s Pose.",
//     workout: "A balanced workout includes cardio, strength training, and flexibility exercises. Aim for variety to stay engaged!",
//     diet: "A balanced diet should include proteins, carbs, fats, vitamins, and minerals. Avoid too much processed food.",
//     cardio: "Cardio, like jogging, cycling, and swimming, is great for heart health and burning calories. Aim for 30 minutes 3-5 times a week.",
//     strength: "Strength training helps build muscle and improve metabolism. Squats, deadlifts, and push-ups are good for beginners.",
//     protein: "Protein is essential for muscle recovery and growth. Good sources include chicken, tofu, beans, and eggs.",
//     flexibility: "Stretching and yoga can improve flexibility and reduce injury risk. Try stretching after workouts for better results.",
//     "lose weight": "To lose weight, focus on a calorie deficit through diet and regular exercise. Drink plenty of water and stay consistent!",
//     "gain muscle": "For muscle gain, eat a protein-rich diet and focus on strength training. Compound exercises like bench press and squats are effective.",
//     meditation: "Meditation helps reduce stress and improves focus. Start with 5 minutes of deep breathing exercises daily.",
//     hydration: "Staying hydrated is key, especially during workouts. Aim for at least 8 glasses of water daily.",
//     sleep: "Good sleep supports muscle recovery and overall health. Aim for 7-9 hours each night.",
//     warmup: "Warm-ups prepare your body for exercise. Try dynamic stretches like leg swings and arm circles before working out.",
//     "cool down": "Cooling down after exercise helps prevent soreness. Try gentle stretching or a slow walk after your workout.",
//     recovery: "Recovery is as important as training. Rest days, good sleep, and protein intake aid in muscle recovery.",
//     supplements: "Common supplements include protein powder, creatine, and BCAAs. Always consult a professional before starting any.",
//     "muscle soreness": "Muscle soreness after a workout is normal. Light stretching and staying hydrated can help reduce it.",
//     "home workout": "Bodyweight exercises like squats, push-ups, and lunges are great for home workouts. No equipment needed!",
//     motivation: "Set realistic goals and track your progress. Working out with a friend can also keep you motivated!",
//     calories: "Tracking calories can help with weight goals. Aim to eat nutrient-dense foods rather than just counting calories.",
//     "personal trainer": "A personal trainer can help create a personalized workout plan and guide you on proper form.",
//     "gym membership": "Our gym offers flexible membership options. Check with the front desk for current packages and prices!",
//     "beginner exercises": "For beginners, focus on basic movements like squats, push-ups, and planks to build a strong foundation.",
//   };

//   // Function to generate a bot response based on user input
//   const getBotResponse = (message) => {
//     const lowercaseMessage = message.toLowerCase();
//     for (let keyword in responses) {
//       if (lowercaseMessage.includes(keyword)) {
//         return responses[keyword];
//       }
//     }
//     return "I'm here to help! Can you please rephrase or ask something specific related to fitness or wellness?";
//   };

//   // Function to handle user input and bot response
//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!userMessage) return;

//     setChatHistory([
//       ...chatHistory,
//       { sender: "user", message: userMessage },
//     ]);
//     setLoading(true);

//     setTimeout(() => {
//       const botResponse = getBotResponse(userMessage);
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         { sender: "bot", message: botResponse },
//       ]);
//       setLoading(false);
//       setUserMessage("");
//     }, 1500);
//   };

//   return (
//     <section className="chatbot-page">
//       <div className="chat-container">
//         <h1 className="page-title">Chat with Jerry</h1>
//         <div className="chat-history">
//           {chatHistory.map((chat, index) => (
//             <div
//               key={index}
//               className={`chat-message ${
//                 chat.sender === "user" ? "user" : "bot"
//               }`}
//             >
//               <strong>{chat.sender === "user" ? "You" : "Bot"}:</strong> {chat.message}
//             </div>
//           ))}
//           {loading && (
//             <div className="chat-message bot typing">
//               <strong>Bot:</strong> Typing...
//             </div>
//           )}
//         </div>

//         <form className="chat-form" onSubmit={sendMessage}>
//           <div className="form-group">
//             <input
//               type="text"
//               id="userMessage"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               placeholder="Type your message here..."
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ChatBotPage;



// import React, { useState } from "react";
// import "../App.css"; // Ensure the styles are correctly imported

// const ChatBotPage = () => {
//   const [userMessage, setUserMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);

  // Expanded responses based on common keywords
//   const responses = {
//     hello: "Hello! How can I help you with your fitness goals?",
//     yoga: "Yoga is excellent for flexibility and mental relaxation. Start with basic poses like Mountain, Warrior, and Child’s Pose.",
//     workout: "A balanced workout includes cardio, strength training, and flexibility exercises. Aim for variety to stay engaged!",
//     diet: "A balanced diet should include proteins, carbs, fats, vitamins, and minerals. Avoid too much processed food.",
//     cardio: "Cardio, like jogging, cycling, and swimming, is great for heart health and burning calories. Aim for 30 minutes 3-5 times a week.",
//     strength: "Strength training helps build muscle and improve metabolism. Squats, deadlifts, and push-ups are good for beginners.",
//     protein: "Protein is essential for muscle recovery and growth. Good sources include chicken, tofu, beans, and eggs.",
//     flexibility: "Stretching and yoga can improve flexibility and reduce injury risk. Try stretching after workouts for better results.",
//     "lose weight": "To lose weight, focus on a calorie deficit through diet and regular exercise. Drink plenty of water and stay consistent!",
//     "gain muscle": "For muscle gain, eat a protein-rich diet and focus on strength training. Compound exercises like bench press and squats are effective.",
//     meditation: "Meditation helps reduce stress and improves focus. Start with 5 minutes of deep breathing exercises daily.",
//     hydration: "Staying hydrated is key, especially during workouts. Aim for at least 8 glasses of water daily.",
//     sleep: "Good sleep supports muscle recovery and overall health. Aim for 7-9 hours each night.",
//     warmup: "Warm-ups prepare your body for exercise. Try dynamic stretches like leg swings and arm circles before working out.",
//     "cool down": "Cooling down after exercise helps prevent soreness. Try gentle stretching or a slow walk after your workout.",
//     recovery: "Recovery is as important as training. Rest days, good sleep, and protein intake aid in muscle recovery.",
//     supplements: "Common supplements include protein powder, creatine, and BCAAs. Always consult a professional before starting any.",
//     "muscle soreness": "Muscle soreness after a workout is normal. Light stretching and staying hydrated can help reduce it.",
//     "home workout": "Bodyweight exercises like squats, push-ups, and lunges are great for home workouts. No equipment needed!",
//     motivation: "Set realistic goals and track your progress. Working out with a friend can also keep you motivated!",
//     calories: "Tracking calories can help with weight goals. Aim to eat nutrient-dense foods rather than just counting calories.",
//     "personal trainer": "A personal trainer can help create a personalized workout plan and guide you on proper form.",
//     "gym membership": "Our gym offers flexible membership options. Check with the front desk for current packages and prices!",
//     "beginner exercises": "For beginners, focus on basic movements like squats, push-ups, and planks to build a strong foundation.",
//   };

//   // Function to generate a bot response based on user input
//   const getBotResponse = (message) => {
//     const lowercaseMessage = message.toLowerCase();
//     for (let keyword in responses) {
//       if (lowercaseMessage.includes(keyword)) {
//         return responses[keyword];
//       }
//     }
//     return "I'm here to help! Can you please rephrase or ask something specific related to fitness or wellness?";
//   };

//   // Function to handle user input and bot response
//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!userMessage) return;

//     setChatHistory([
//       ...chatHistory,
//       { sender: "user", message: userMessage },
//     ]);
//     setLoading(true);

//     setTimeout(() => {
//       const botResponse = getBotResponse(userMessage);
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         { sender: "bot", message: botResponse },
//       ]);
//       setLoading(false);
//       setUserMessage("");
//     }, 1500);
//   };

//   return (
//     <section className="chatbot-page">
//       <div className="chat-container">
//         <h1 className="page-title">Chat with Jerry</h1>
//         <div className="chat-history">
//           {chatHistory.map((chat, index) => (
//             <div
//               key={index}
//               className={`chat-message ${
//                 chat.sender === "user" ? "user" : "bot"
//               }`}
//             >
//               <strong>{chat.sender === "user" ? "You" : "Bot"}:</strong> {chat.message}
//             </div>
//           ))}
//           {loading && (
//             <div className="chat-message bot typing">
//               <strong>Bot:</strong> Typing...
//             </div>
//           )}
//         </div>

//         <form className="chat-form" onSubmit={sendMessage}>
//           <div className="form-group">
//             <input
//               type="text"
//               id="userMessage"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               placeholder="Type your message here..."
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ChatBotPage;

// chatling page
// import React, { useEffect } from "react";

// const ChatBotPage = () => {
//   useEffect(() => {
//     // Clear sessionStorage and localStorage before loading the chatbot
//     sessionStorage.clear();
//     localStorage.clear();

//     // Add the Chatling script dynamically
//     const chatlingScript = document.createElement("script");
//     chatlingScript.type = "text/javascript";
//     chatlingScript.src = "https://chatling.ai/js/embed.js";
//     chatlingScript.async = true;
//     chatlingScript.setAttribute("data-id", "4837619552");
//     chatlingScript.setAttribute("data-display", "fullscreen");
//     chatlingScript.id = "chatling-embed-script";
//     document.body.appendChild(chatlingScript);

//     // Optionally, you could reset the chatbot state here if Chatling provides an API
//     // For example: window.chtlConfig.reset = true;

//     // Cleanup script on component unmount
//     return () => {
//       document.body.removeChild(chatlingScript);
//     };
//   }, []); // Empty dependency array ensures this runs once when the component is mounted

//   return (
//     <div>
//       <h1>Chatbot Page</h1>
//       <p>Chatbot loading...</p>
//     </div>
//   );
// };

// export default ChatBotPage;



/// practice one
import React, { useEffect } from "react";

const ChatBotPage = () => {
  const resetChat = () => {
    // Reload the page to reset the chatbot
    window.location.reload();
  };

  useEffect(() => {
    // Add the Chatling script dynamically
    const chatlingScript = document.createElement("script");
    chatlingScript.type = "text/javascript";
    chatlingScript.src = "https://chatling.ai/js/embed.js";
    chatlingScript.async = true;
    chatlingScript.setAttribute("data-id", "4837619552");
    chatlingScript.setAttribute("data-display", "fullscreen");
    chatlingScript.id = "chatling-embed-script";
    document.body.appendChild(chatlingScript);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(chatlingScript);
    };
  }, []);

  return (
    <div>
      <h1>Chatbot Page</h1>
      <p>Chatbot loading...</p>
      <button onClick={resetChat}>Restart Chat</button>
    </div>
  );
};

export default ChatBotPage;
