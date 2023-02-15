import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsToUse from './screens/ComponentsToUse';
import CashDeposit from './screens/CashDeposit';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashDeposit />} />
          <Route path="/components" element={<ComponentsToUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
