import { Layout } from 'antd';
import SideNav from "./components/SideNavBar/SideNav";
import NavBar from "./components/NavBar/NavBar.jsx";
const TheStyling = {
  backgroundColor: 'rgba(0, 0, 0, 0.4)' ,
  width: '100%',
  height: '150p',
  display: 'flex'
}
const MainFrame = ()=> {
  const { Header, Footer, Sider, Content } = Layout;
    return(
        
        <Layout>
        <Header style={TheStyling}></Header><NavBar/>
        <Layout>
          <Sider><SideNav/></Sider>
          
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
}

export default MainFrame;