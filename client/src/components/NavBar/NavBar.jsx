import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Login from "../../containers/Login/Login";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Feed from "../../containers/Feed/Feed";
import Signup from "../../containers/SignUp/SignUp";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";

import Admin from "../../containers/Admin/Admin";

const NavBar = () => {
  //    adding state for LoginButton
  // const [login, setLogin] = useState("Loaded");

  return (
    <div>
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Row justify= "space-between">
        <Col> 
        <Link to="/" style={{ color: "white" }}>
          ArtHouse
        </Link>
        </Col>
        <Col > 
        <Menu.Item key="1">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/feed">Feed</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
        </Col>
        </Row>
      </Menu>
      
    </div>
  );
};

export default NavBar;
