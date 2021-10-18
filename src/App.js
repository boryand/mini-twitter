import "./App.css";
import Articles from "./components/Articles";
import Message from "./components/message";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './components/logo.png';



// import RightPane from "./components/RightPane";
import { useEffect, useState } from 'react';
import LeftPane from "./components/leftPane";
import User from "./components/user";
import Search from './components/Search'

function App() {
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetch("https://minitwitterbackend.herokuapp.com/messages")
  //     .then((response) => response.json())
  //     .then((data) => setMessages(data));
  // }, []);






  return (
   
    <Router>
      <div className="appcontainer">
        <div className="leftcontainer">
        <img className='logo' src={logo} />
        <LeftPane />
        </div>
        <Switch>
        <div className="middlecontainer">
        <Route path="/profile"  component={User} />
          <Route exact path="/"  component={Articles} />
          <Route exact path="/messages/:id" component={Message}  />
        </div>
        </Switch>
        <div className="rightcontainer">
        {/* <RightPane style={{padding:0}}/> */}
        </div>
      </div>
    </Router>

  );
}

export default App;
