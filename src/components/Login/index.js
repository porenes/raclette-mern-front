import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Login = (props) => {
  const [signUpModal, setSignUpModal] = useState(!props.signin);
  const [signInModal, setSignInModal] = useState(props.signin);
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
    <div className="container text-center">
      <div className="btn-group" role="group" aria-label="Register or Login">
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
      <div className="container">
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Login;
