import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
};

export default App;
