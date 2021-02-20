
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Row, Col } from "antd";


const SideNav = () => {
  return (
    <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]} style={{paddingTop: "8rem"}}>
      <Menu.Item key="1">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/viewusers">View Users</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/userprofile">Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideNav;
