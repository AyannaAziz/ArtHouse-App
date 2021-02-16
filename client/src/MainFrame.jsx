import { Layout } from "antd";
import SideNav from "./components/SideNavBar/SideNav";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import Feed from "./containers/Feed/Feed";
import { Row, Col } from 'antd';

const SideNavStyling = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  width: "80%",
  height: "1000px",
  display: "flex",
};

const NavStyling = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  width: "100%",
  height: "100px",
  display: "flex",
};
const MainFrame = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Router> 
    <Layout>
      <Header style={NavStyling}></Header>
      <NavBar />
      <Layout>
        <Sider style={SideNavStyling}>
          <SideNav />
        </Sider>
        <Content> 
        <Switch>
        <Route path="/login">
          <Login/> 
        </Route>
        <Route path="/feed">
        <Col span={12} offset={6}>  <Feed /></Col>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </Router>
  );
};

export default MainFrame;
