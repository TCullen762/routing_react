import React from 'react';

import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Welcome from './components/welcome/welcome.js';
import Clock from './components/clock/clock.js';
import Contact from './components/contact/Contact.js';
import Navigation from './components/navigation/Navigation.js';
import Four from './components/404/404.js';
import Jeopardy from './components/jeopardy/Jeopardy';





function App() {
  return (
    <div className="App">
      <Navigation />
      
      
    
     
      <Switch>
        
      <Route exact
      path="/"
      render={(props) => <Welcome {...props} name=" " />}
    />

      <Route path ="/welcome/:yam" render={(props) => <Welcome{...props} name={props.match.params.yam}/>}  />
      <Route path="/clock" component={Clock}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/jeopardy" component={Jeopardy}/>
      <Route component={Four}/>
      
      </Switch>
    </div>
  );
}



export default App;
