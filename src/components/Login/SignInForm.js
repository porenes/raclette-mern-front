import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const handleLogin = (e) => {
    setPasswordInvalid(null);
    setEmailInvalid(null);
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        // login request works
        localStorage.setItem("token", res.data.user.token);
        if (res.data.errors) {
          // TODO handle errors properlu
        }
        window.location = "/";
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        console.log(errors);
        if (errors.email) {
          setEmailInvalid(errors.email);
        }
        if (errors.password) {
          setPasswordInvalid(errors.password);
        }
        if (errors["email or password"]) {
          setPasswordInvalid("email or password is invalid");
        }
      });
  };
  return (
    <Form
      action=""
      onSubmit={handleLogin}
      id="sign-in-form"
      noValidate
      className="needs-validation"
    >
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <br />
        <Form.Control
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          isInvalid={emailInvalid}
          autoComplete="email"
        />
        <Form.Control.Feedback type="invalid">
          {emailInvalid}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Mot de passe</Form.Label>
        <br />
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isInvalid={passwordInvalid}
          autoComplete="password"
        />

        <Form.Control.Feedback type="invalid">
          {passwordInvalid}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Connexion</Button>
    </Form>
  );
};

export default SignInForm;
