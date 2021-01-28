import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Login = () => {
  const [signUpModal, setSignUpModal] = useState(true);
  const [signInModal, setSignInModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "login") {
      setSignInModal(true);
      setSignUpModal(false);
    }
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-6 text-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Register or Login"
          >
            <button
              onClick={handleModals}
              id="register"
              className={signUpModal ? "btn btn-primary" : "btn btn-secondary"}
            >
              Register
            </button>
            <button
              onClick={handleModals}
              id="login"
              className={signInModal ? "btn btn-primary" : "btn btn-secondary"}
            >
              Login
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-8 align-self-center">
          {signUpModal && <SignUpForm />}
          {signInModal && <SignInForm />}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Login;
