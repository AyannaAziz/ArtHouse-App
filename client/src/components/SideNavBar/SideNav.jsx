import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Feed from "../../containers/Feed/Feed";
import styles from "./SideNav.css";


const SideNav = () => {

  return (
      <div className={styles.wrapper}>
        <ul className="sidenavUl">
        <li>
          <Link to="/login">About</Link>
        </li>
        <li>
          <Link to="/feed">SEE WHO'S USING ARTHOUSE</Link>
        </li>
        </ul>
      </div>

  );
};

export default SideNav;
