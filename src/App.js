import React from 'react';
import "./App.scss";
import Nav from './components/nav';
import Login from './components/login';
import Home from './components/home';
import Inbox from './components/inbox';
import Explore from './components/explore';
import Profile from './components/profile';
 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Nav />
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Inbox" component={Inbox}/>
            <Route exact path="/Explore" component={Explore}/>
            <Route exact path="/Profile" component={Profile}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
