// import React, { useState } from "react";

// const Input = () => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");

//   const handleForm = (event) => {
//     event.preventDefault();
//     console.log("from submitted with values", name, location);
//   };

//   return (
//     <div>
//       <form onSubmit={handleForm}>
//         <label htmlFor="name">Enter Name:</label>
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <br />
//         <label htmlFor="location">Enter Location:</label>
//         <input
//           id="location"
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <br />

//         <button type="submit">Submit this</button>
//       </form>
//     </div>
//   );
// };

// export default Input;
