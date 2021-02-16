import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Feed from "../../containers/Feed/Feed";
import styles from "./SideNav.css";
import { Row, Col } from "antd";

const SideNav = () => {
  // const handleClick = e => {
  //       console.log('click ', e);
  //     };
  return (
    <Router>
      <div className={styles.wrapper}>
        <li>
          <Link to="/login">About</Link>
        </li>
        <li>
          <Link to="/feed">SEE WHO'S USING ARTHOUSE</Link>
        </li>
      </div>

      {/* <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/feed">
          <Col span={12} offset={6}>
            {" "}
            <Feed />
          </Col>
        </Route>
      </Switch> */}
      {/* <div className={styles.wrapper}>

        <li>
          <Link to="/login">About</Link>
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
      </Switch> */}
    </Router>
  );
};

export default SideNav;
