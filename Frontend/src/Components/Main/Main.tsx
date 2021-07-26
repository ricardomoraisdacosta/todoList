import React from "react";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Dashboard from "./Dashboard/Dashboard";

const Main: React.FC<{}> = (props) => {
  // const isLogin = useSelector((state: RootState) => state.main.login);
  const isLogin = useSelector((state: RootState) => state.main.login);
  const user = useSelector((state: RootState) => state.main.userName);

  return (
    <div>
      {!isLogin && <Login />}
      {isLogin && <Dashboard user={user} />}
    </div>
  );
};

export default Main;
