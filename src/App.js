import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "demo-app/node_modules/react-router-dom";


import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Video from './Pages/video';

function  App() {
  return(
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/video" component={Video}/>
          <Route exact path="/contacts" component={Contacts}/>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
