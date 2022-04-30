import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
        <span className="hr-sign-in d-inline-block"></span>
        <span className="d-inline-block px-2 fw-bold">or</span>
        <span className="hr-sign-in d-inline-block"></span>
      </div>
      <button className="btn btn-success w-75 mt-3">Google Login</button>
    </div>
  );
};

export default SocialLogin;
