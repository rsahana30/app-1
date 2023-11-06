
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <News pageSize={6} country="in" category="Science"/>
       
      </div>
    )
  }
}
