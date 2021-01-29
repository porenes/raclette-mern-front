import axios from "axios";
import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passConfErr, setPassConfErr] = useState(false);
  const nameMess = document.getElementById("name-err");
  const emailMess = document.getElementById("email-err");
  const passwordMess = document.getElementById("password-err");
  const passConfMEss = document.getElementById("pass-conf-err");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Entering handle signup");
    setNameErr(false);
    setEmailErr(false);
    setPasswordErr(false);
    setPassConfErr(false);
    nameMess.innerHTML = "";
    emailMess.innerHTML = "";
    passwordMess.innerHTML = "";
    passConfMEss.innerHTML = "";
    if (!name) {
      setNameErr(true);
      nameMess.innerHTML = "You need a pseudo";
    }
    if (!email) {
      setEmailErr(true);
      emailMess.innerHTML = "You need an email";
    }
    if (!password) {
      setPasswordErr(true);
      passwordMess.innerHTML = "you need a password";
    }
    if (password !== passConf) {
      setPassConfErr(true);
      passConfMEss.innerHTML = "passwords do not match";
    }
    if (!(nameErr || emailErr || passwordErr || passConfErr)) {
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
            setNameErr(true);
            nameMess.innerHTML = "Name already exists";
          }
          if (errors.email) {
            setEmailErr(true);
            emailMess.innerHTML = "email already exists";
          }
        });
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSignup}
      id="sign-up-form"
      noValidate
      className="needs-validation"
    >
      <div className="form-group">
        <label htmlFor="name">Pseudo</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          className={nameErr ? "form-control is-invalid" : "form-control"}
        />
        <div className="invalid-feedback" id="name-err"></div>
      </div>
      <div class="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          className={emailErr ? "form-control is-invalid" : "form-control"}
          placeholder="youremail@tld.fr"
          aria-describedby="emailHelp"
        />
        <div className="invalid-feedback" id="email-err"></div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={passwordErr ? "form-control is-invalid" : "form-control"}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="invalid-feedback" id="password-err"></div>
      </div>
      <div className="form-group">
        <label htmlFor="pass-conf">Confirm you password</label>
        <input
          type="password"
          name="pass-conf"
          id="pass-conf"
          className={passConfErr ? "form-control is-invalid" : "form-control"}
          onChange={(e) => setPassConf(e.target.value)}
        />
        <div className="invalid-feedback" id="pass-conf-err"></div>
      </div>
      <input type="submit" value="Register" className="btn" />
    </form>
  );
};

export default SignUpForm;
