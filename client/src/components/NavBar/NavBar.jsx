import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Login from "../../containers/Login/Login";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Feed from "../../containers/Feed/Feed";
import Signup from "../../containers/SignUp/SignUp";

import Admin from "../../containers/Admin/Admin";

const NavBar = () => {
  //    adding state for LoginButton
  // const [login, setLogin] = useState("Loaded");

  return (

      <div className={styles.wrapper}>
        <h1>ArtHouse</h1>
        <ul className = "navbarUl"> 
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        </ul>
      </div>
  );
};

export default NavBar;
