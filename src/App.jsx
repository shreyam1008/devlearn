import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./views/Homepage";
import Calculator from "./components/Calculator/Calculator";
import Later from "./components/Form/Later";
import NotFound404 from "./views/NotFound404";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<Layout />}>
            <Route path="/test" element={<h1>test</h1>} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
