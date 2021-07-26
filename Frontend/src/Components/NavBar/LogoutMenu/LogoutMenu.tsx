import React from "react";
import classes from "./LogoutMenu.module.css";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../store/main.store";

const LogoutMenu: React.FC<{ setShowLogoffButton: any }> = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = (event: any) => {
    event.preventDefault();
    dispatch(setLogin(false));
    props.setShowLogoffButton(false);
  };
  return (
    <div onClick={logoutHandler} className={classes.logoutMenu}>
      Logout
    </div>
  );
};

export default LogoutMenu;
