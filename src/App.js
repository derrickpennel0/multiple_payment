import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultipleDebitPayment from "./screens/multiple_debit_payment/MultipleDebitPayment";
import Tab_Stepper from "./components/tab_stepper/Tab_Stepper";

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleDebitPayment />} />
          <Route path="/homepage" element={<Tab_Stepper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
