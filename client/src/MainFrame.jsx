import { Layout } from "antd";
import SideNav from "./components/SideNavBar/SideNav";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import Feed from "./containers/Feed/Feed";
import SignUp from './containers/SignUp/SignUp';
import Demo from './containers/SignUp/Demo';

import { Row, Col } from 'antd';

// const SideNavStyling = {
//   backgroundColor: "rgba(0, 0, 0, 0.4)",
//   width: "80%",
//   height: "1000px",
//   display: "flex",
// };

// const NavStyling = {
//   backgroundColor: "rgba(0, 0, 0, 0.4)",
//   width: "100%",
//   height: "100px",
//   display: "flex",
  
// };
const MainFrame = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Router> 
    <Layout>
      <Header style={{padding: "5rem"}} > <NavBar /></Header>
      
      <Layout>
        <Sider >
          <SideNav />
        </Sider>
        <Content style={{height:"100vh"}}> 
        <Switch>
        <Route path="/login">
        <Col span={12} offset={6} style={{paddingTop:"15rem"}}> 
          <Login/> 
          </Col>
        </Route>
        <Route path="/feed">
        <Col span={12} offset={6}>  <Feed /></Col>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path ="/signup">
          <Demo />
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
