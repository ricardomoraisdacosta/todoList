import React from "react";
import { Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Main from "./Components/Main/Main";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/registration">
        <Registration />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </div>
  );
}
export default App;
