import axios from "axios";
import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailValidation = document.querySelector("#email-validation");
  const passwordValidation = document.querySelector("#password-validation");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const handleLogin = (e) => {
    setPasswordInvalid(false);
    setEmailInvalid(false);
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
        window.location ="/";
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        console.log(errors);
        if (errors.email) {
          setEmailInvalid(true);
          emailValidation.innerHTML = errors.email;
        }
        if (errors.password) {
          setPasswordInvalid(true);
          passwordValidation.innerHTML = errors.password;
        }
        if (errors["email or password"]) {
          setPasswordInvalid(true);
          passwordValidation.innerHTML = "email or password is invalid";
        }
      });
  };
  return (
    <form
      action=""
      onSubmit={handleLogin}
      id="sign-in-form"
      noValidate
      className="needs-validation"
    >
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={emailInvalid ? "form-control is-invalid" : "form-control"}
        />
        <div className="invalid-feedback" id="email-validation"></div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={
            passwordInvalid ? "form-control is-invalid" : "form-control"
          }
        />
        <div className="invalid-feedback" id="password-validation"></div>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default SignInForm;
