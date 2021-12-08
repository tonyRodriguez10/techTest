import './App.css';

/* Personal imports */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Edit from '../src/components/Edit';
import Home from '../src/components/Home';
import Add from '../src/components/Add';
import Dashboard from './components/Dashboard';
import  Navbar  from './components/Navbar'; 
import './styles/layouts/navbar.css'; 


function App(){
    return (
      <div className="App">
            <Router>
            <Navbar />
                <Switch>

                <Route exact path="/">
                   <Home />
                </Route>

                <Route exact path="/dashboard">
                   <Dashboard />
                </Route>

                <Route exact path="/edit/:id">
                    <Edit />
                </Route>

                <Route exact path="/add">
                    <Add />
                </Route>
                 

                  

                </Switch>
                </Router>        
      </div>
    );
}//end function
export default App;
