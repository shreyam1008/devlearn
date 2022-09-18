import "./App.css";

import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LearningRoutes from "./routes/LearningRoutes";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App"></div>
        <LearningRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
