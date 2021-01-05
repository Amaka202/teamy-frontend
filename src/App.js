/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Users from './Components/users/Users'
import Posts from './Components/posts/Posts'
import Home from './Components/home/Home';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/users' exact component={Users} />
          <Route component={NotFound}/>
        </Switch>
    </div>
  );
}

export default App;
