import React from "react";

// const HOC = ({ children }) => {
//   return (
//     <div>
//       <h1>Heading</h1>
//       {children}
//       <h2>Footer</h2>
//     </div>
//   );
// };

const HOC = (Comp) => (props) => {
  return (
    <div>
      <h1>Heading</h1>
      <Comp {...props} />
      <h2>Footer</h2>
    </div>
  );
};

export default HOC;
