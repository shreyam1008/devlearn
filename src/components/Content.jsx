import React, { Suspense, useState } from "react";
import Calculator from "./Calculator/Calculator";
// import Later from "./Later";
import "./Content.css";
const Later = React.lazy(() => import("./Form/Later"));

const Content = () => {
  const [activeNavbar, setActiveNavbar] = useState("calc");
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="content">
        <div className="nav">
          <div
            className={`tabs  ${
              activeNavbar === "calc" ? "tab_active" : "tab_disabled"
            }`}
            onClick={() => setActiveNavbar("calc")}
          >
            Calculator
          </div>
          <div
            className={`tabs ${
              activeNavbar === "calc" ? "tab_active" : "tab_disabled"
            }`}
            onClick={() => setActiveNavbar("later")}
          >
            From
          </div>
        </div>
        {activeNavbar === "calc" ? <Calculator /> : <Later />}
      </div>
    </Suspense>
  );
};

export default Content;
