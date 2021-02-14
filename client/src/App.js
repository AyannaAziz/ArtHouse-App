import logo from "./logo.svg";
import About from "./containers/About/About.jsx";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Feed from "./containers/Feed/Feed.jsx";
import Login from "./containers/Login/Login";
import SideNav from "./components/SideNavBar/SideNav"
import MainFrame from './MainFrame.jsx'
function App() {
  let history = useHistory()

 
  return (
    <>
    

  
    <MainFrame/>
       

      
  
    </>
  );
}

export default App;
