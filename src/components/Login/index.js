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
    <div className="connection-form">
      <div className="form-container container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "btn btn-primary" : "btn btn-secondary"}
          >
            Register
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "btn btn-primary" : "btn btn-secondary"}
          >
            Login
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Login;
