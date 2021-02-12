import logo from './logo.svg';
import About from "./containers/About/About.jsx"
import {useEffect} from "react";
import NavBar from "./components/NavBar/NavBar.jsx"

function App() {
  
  useEffect(() => {
const fetcher = async () => {
const results = await fetch("/api/users")
console.log(await results.json())
}
fetcher()
  }, [])
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
