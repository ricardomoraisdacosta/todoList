import React, { useRef } from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setLogin, setUser } from "../../../store/main.store";

const Login: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const loginHandler = async (loginRequest: any, email: string) => {
    const res = await fetch("http://localhost:3002/user/login", loginRequest);
    const result = await res.json();
    if (!result) {
      alert("Login Failed: please verify your username and password");
    } else {
      dispatch(setLogin(true));
      dispatch(setUser(email));
      alert("Login Successful");
    }
  };

  const submitLoginHandler = (event: any) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const loginRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: passwordRef.current.value,
      }),
    };
    loginHandler(loginRequest, email);
  };

  return (
    <div>
      <div className={classes.loginContent}>
        <form onSubmit={submitLoginHandler}>
          <h1>Login:</h1>
          <label htmlFor="email"> Insert your e-mail</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Insert E-mail"
          />
          <label htmlFor="password"> Insert your password</label>
          <input type="password" id="password" ref={passwordRef} />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
