import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route>
        
        <Switch>
        <Route path="/"><News pageSize={6} country="in" category="General"/> </Route>
        <Route path="/Business"><News pageSize={6} country="in" category="Business"/> </Route>
        <Route path="/Entertainment"><News pageSize={6} country="in" category="Entertainment"/> </Route>
        <Route path="/Health"><News pageSize={6} country="in" category="Health"/> </Route>
        <Route path="/Science"><News pageSize={6} country="in" category="Science"/> </Route>
        <Route path="/Sports"><News pageSize={6} country="in" category="Sports"/> </Route>
        <Route path="/Technology"><News pageSize={6} country="in" category="Technology"/> </Route>  
       
    </Switch>
    
   
        </Route>
    </div>
     
    )
  }
}
