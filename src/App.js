import "./App.css";
import Articles from "./components/Articles";
import Message from "./components/message";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './components/logo.png';
// import RightPane from "./components/RightPane";

function App() {
  return (
   
    <Router>
       <img className='logo' src={logo} />
     
      <Switch>
        <Route path="/" exact component={Articles} />
        <Route path="/:id" component={Message} />
      </Switch>

      {/* <RightPane /> */}

    </Router>

  );
}

export default App;
