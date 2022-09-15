import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Calculator from "./Calculator/Calculator";
// import Later from "./Later";
import "./Content.css";
import Later from "./Form/Later";
// const Later = React.lazy(() => import("./Form/Later"));

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
            // onClick={() => setActiveNavbar("calc")}
          >
            <Link to="/calculator">Calculator</Link>
          </div>
          <div
            className={`tabs ${
              activeNavbar === "calc" ? "tab_active" : "tab_disabled"
            }`}
            onClick={() => setActiveNavbar("later")}
          >
            <Link to="/form">From</Link>
          </div>
        </div>
        {/* <Layout> */}
        {activeNavbar === "calc" ? <Calculator /> : <Later />}
        {/* </Layout> */}
      </div>
    </Suspense>
  );
};

export default Content;
