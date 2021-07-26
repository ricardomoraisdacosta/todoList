import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LogoutMenu from "./LogoutMenu/LogoutMenu";

const NavBar: React.FC<{}> = (props) => {
  const [showLogoffButton, setShowLogoffButton] = useState(false);
  const isLogin = useSelector((state: RootState) => state.main.login);
  const user = useSelector((state: RootState) => state.main.userName);

  const showLogoutButtonHandler = (event: any) => {
    setShowLogoffButton(!showLogoffButton);
  };

  return (
    <div className={classes.navBar}>
      <h3>EdirectTodo List</h3>

      <NavLink
        to="/"
        className={classes.inactive}
        activeClassName={classes.active}
        exact={true}
      >
        Todo List
      </NavLink>
      {!isLogin && (
        <NavLink
          to="/registration"
          className={classes.inactive}
          activeClassName={classes.active}
          exact={true}
        >
          Register
        </NavLink>
      )}

      {isLogin && (
        <div onClick={showLogoutButtonHandler} className={classes.userMenu}>
          {user} &#x25Bc;
        </div>
      )}
      {showLogoffButton && (
        <LogoutMenu setShowLogoffButton={setShowLogoffButton} />
      )}
    </div>
  );
};

export default NavBar;
