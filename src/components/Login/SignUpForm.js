import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passConfErr, setPassConfErr] = useState(false);

  const handleSignup = (e) => {
    let error = false
    e.preventDefault();
    console.log("Entering handle signup");
    setNameErr(null);
    setEmailErr(null);
    setPasswordErr(null);
    setPassConfErr(null);
    if (!name) {
      setNameErr("You need a pseudo");
      error=true
    }
    if (!email) {
      setEmailErr("You need an email");
      error=true
    }
    if (!password) {
      setPasswordErr("you need a password");
      error=true
    }
    if (password !== passConf) {
      setPassConfErr("passwords do not match");
      error=true
    }
    if (!error) {
      console.log("no form error so we call");
      axios({
        method: "post",
        url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/register`,
        withCredentials: true,
        data: {
          name,
          email,
          password,
        },
      })
        .then((res) => {
          console.log("call ok so login");
          localStorage.setItem("token", res.data.user.token);
          window.location = "/";
        })
        .catch((err) => {
          console.log("errors", err);
          const errors = err.response.data.errors;
          console.log(errors);
          if (errors.name) {
            setNameErr("Name already exists");
          }
          if (errors.email) {
            setEmailErr("email already exists");
          }
        });
    }
  };

  return (
    <Form
      action=""
      onSubmit={handleSignup}
      id="sign-up-form"
      noValidate
      className="needs-validation"
    >
      <Form.Group controlId="name">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          isInvalid={nameErr}
        />
        <Form.Control.Feedback type="invalid">{nameErr}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          isInvalid={emailErr}
          placeholder="youremail@tld.fr"
          aria-describedby="emailHelp"
        />
        <Form.Control.Feedback type="invalid">{emailErr}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          isInvalid={passwordErr}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {passwordErr}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="pass-conf">
        <Form.Label>Confirmez votre mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="pass-conf"
          id="pass-conf"
          isInvalid={passConfErr}
          onChange={(e) => setPassConf(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {passConfErr}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">S'inscrire</Button>
    </Form>
  );
};

export default SignUpForm;
