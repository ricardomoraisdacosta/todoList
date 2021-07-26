import React, { useRef } from "react";
import classes from "./Registration.module.css";
import { useHistory } from "react-router";

const Registration: React.FC<{}> = (props) => {
  const history = useHistory();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordConfirmationRef: any = useRef();
  const login = async (registrationRequest: any) => {
    const res = await fetch(
      "http://localhost:3002/user/registration",
      registrationRequest
    );
    const result = await res.json();

    if (result === "OK") {
      alert("Email Registered Successfully");
    } else {
      alert("This Email already exists in the database, please try another");
    }
    history.push("/");
  };

  const submitRegistrationHandler = (event: any) => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      alert("Invalid Email");
    } else if (
      passwordRef.current.value !== passwordConfirmationRef.current.value
    ) {
      alert("Passwords Doesn't Match");
    } else if (passwordRef.current.value.trim().length === 0) {
      alert("Passwords empty");
    } else {
      const registrationRequest = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      };
      login(registrationRequest);
    }
  };
  return (
    <div className={classes.registrationContent}>
      <h1>Register Here:</h1>
      <form onSubmit={submitRegistrationHandler}>
        <label htmlFor="email"> Insert your e-mail</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          placeholder="Insert E-mail"
        />
        <label htmlFor="password"> Insert your password</label>
        <input type="password" id="password" ref={passwordRef} />
        <label htmlFor="passwordConfirmation"> Confirm your password</label>
        <input
          type="password"
          id="passwordConfirmation"
          ref={passwordConfirmationRef}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
