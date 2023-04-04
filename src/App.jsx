import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./layouts/Main";
import SignInPage from "./layouts/SignInPage";
import SignUpPage from "./layouts/SignUpPage";
import http from "./services/http.service";

http.get("/todos");

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
};

export default App;
