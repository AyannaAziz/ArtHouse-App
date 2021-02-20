import { Layout } from "antd";
import SideNav from "./components/SideNavBar/SideNav";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import Feed from "./containers/Feed/Feed";

import Demo from './containers/SignUp/Demo';

import { Row, Col } from 'antd';
import About from "./containers/About/About";
import UserProfile from "./containers/UserProfile/UserProfile";
import ViewUsers from "./containers/ViewUsers/ViewUsers";


// creating main frame object to import components, will display in App.js
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
        <Route path ="/about">
          <About />
        </Route>
        <Route path ="/userprofile">
          <UserProfile />
        </Route>
        <Route path ="/viewusers">
          <ViewUsers />
        </Route>
      </Switch>
        </Content>
      </Layout>
      <Footer style={{backgroundColor: "grey", textAlign: 'center'}}>ArtHouse 2021. All rights reserved.</Footer>
    </Layout>
    </Router>
  );
};

export default MainFrame;
