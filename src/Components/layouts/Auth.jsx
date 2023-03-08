import React from "react";
import Login from "../ui/SignIn";
import { useParams } from "react-router-dom";
import SignUp from "../ui/SignUp";

const Auth = () => {
  const { type } = useParams();
  return type === "login" ? <Login /> : <SignUp />;
};

export default Auth;
