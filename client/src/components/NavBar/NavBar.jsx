import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Login from "../../containers/Login/Login";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Feed from "../../containers/Feed/Feed";
import Signup from "../../containers/SignUp/SignUp";
import { Row, Col } from 'antd';

const NavBar = () => {
  //    adding state for LoginButton
  // const [login, setLogin] = useState("Loaded");

  return (
    <Router>
      <div className={styles.wrapper}>
        <h1>ArtHouse</h1>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/feed">
        <Col span={12} offset={6}>  <Feed /></Col>
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar;
