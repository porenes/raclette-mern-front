import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
    <Container className="text-center">
      <ButtonGroup role="group" aria-label="Register or Login">
        <Button
          onClick={handleModals}
          id="register"
          variant={signUpModal ? "primary" : "secondary"}
        >
          S'inscrire
        </Button>
        <Button
          onClick={handleModals}
          id="login"
          variant={signInModal ? "primary" : "secondary"}
        >
          Se connecter
        </Button>
      </ButtonGroup>
      <Container>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </Container>
    </Container>
  );
};

export default Login;
