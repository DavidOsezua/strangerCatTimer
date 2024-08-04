import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { Footer } from "./Components";

const App = () => {
  return (
    <div className="transition">
      <BrowserRouter>
        {/* <ScrollToTop */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
