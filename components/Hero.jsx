// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='hero'>
//     <div className="content">
//       <div className="title">
//         <h3>LET'S</h3>
//         <h3>get</h3>
//         <h3>moving</h3>

//       </div>
//       <div className="sub-title">
//       <p>your journey fitness starts here</p>
//       <p>unlesh your potential</p>
//       </div>
//       <div className="buttons">
//       <button>log in</button>
//       <button>Discover your plan</button>

//       </div>
//     </div>
      
//     </section>
//   )
// }

// export default Hero



// src/Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className='hero'>
//       <div className="content">
//         <div className="title">
//           <h3>LET'S</h3>
//           <h3>get</h3>
//           <h3>moving</h3>
//         </div>
//         <div className="sub-title">
//           <p>your journey fitness starts here</p>
//           <p>unleash your potential</p>
//         </div>
//         <div className="buttons">
//           <button>log in</button>
//           <Link to="/chat">
//             <button>Discover your plan</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className='hero'>
//       <div className="content">
//         <div className="title">
//           <h3>LET'S</h3>
//           <h3>get</h3>
//           <h3>moving</h3>
//         </div>
//         <div className="sub-title">
//           <p>your journey fitness starts here</p>
//           <p>unleash your potential</p>
//         </div>
//         <div className="buttons">
//           <Link to="/login">
//             <button>Log in</button>
//           </Link>
//           <Link to="/chat">
//             <button>Resolver</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
//tidio support>settings>live chat> installtion>get the code

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    // Add the Tidio script dynamically
    const script = document.createElement('script');
    script.src = "//code.tidio.co/toceqatn7dff8mo6demardnivoufyn0y.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h3>LET'S</h3>
          <h3>get</h3>
          <h3>moving</h3>
        </div>
        <div className="sub-title">
          <p>your journey fitness starts here</p>
          <p>unleash your potential</p>
        </div>
        <div className="buttons">
          <Link to="/login">
            <button>Log in</button>
          </Link>
          <Link to="/chat">
            <button>Resolver</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// tidio and for chatlink also
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   useEffect(() => {
//     // Add the Tidio script dynamically
//     const tidioScript = document.createElement('script');
//     tidioScript.src = "//code.tidio.co/toceqatn7dff8mo6demardnivoufyn0y.js";
//     tidioScript.async = true;
//     document.body.appendChild(tidioScript);

//     // Add the Chatling script dynamically
//     const chatlingScript = document.createElement('script');
//     chatlingScript.type = 'text/javascript';
//     chatlingScript.src = "https://chatling.ai/js/embed.js";
//     chatlingScript.async = true;
//     chatlingScript.setAttribute('data-id', '4837619552');
//     chatlingScript.setAttribute('data-display', 'fullscreen');
//     chatlingScript.id = 'chatling-embed-script';
//     document.body.appendChild(chatlingScript);

//     // Cleanup scripts on component unmount
//     return () => {
//       document.body.removeChild(tidioScript);
//       document.body.removeChild(chatlingScript);
//     };
//   }, []);

//   const handleResolverClick = () => {
//     // Open Chatling chatbot when the button is clicked
//     window.chtlConfig = {
//       chatbotId: "4837619552",
//       display: "fullscreen",
//     };
//   };

//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h3>LET'S</h3>
//           <h3>get</h3>
//           <h3>moving</h3>
//         </div>
//         <div className="sub-title">
//           <p>your journey fitness starts here</p>
//           <p>unleash your potential</p>
//         </div>
//         <div className="buttons">
//           <Link to="/login">
//             <button>Log in</button>
//           </Link>
//           <button onClick={handleResolverClick}>Resolver</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

