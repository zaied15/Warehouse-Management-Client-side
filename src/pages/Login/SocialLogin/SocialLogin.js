import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
        <span className="hr-sign-in d-inline-block"></span>
        <span className="d-inline-block px-2 fw-bold">or</span>
        <span className="hr-sign-in d-inline-block"></span>
      </div>
      <p className="text-danger fw-bold">{error ? error.message : ""}</p>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-75 mt-3"
      >
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
