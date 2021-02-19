import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Feed from "../../containers/Feed/Feed";
import styles from "./SideNav.css";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";

const SideNav = () => {
  return (
    <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]} style={{paddingTop: "8rem"}}>
      <Menu.Item key="1">
        <Link to="/login">About</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/login">View Users</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideNav;
