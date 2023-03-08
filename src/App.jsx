import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Components/layouts/Main";
import SignIn from "./Components/ui/SignIn";
import SignUp from "./Components/ui/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
};

export default App;
