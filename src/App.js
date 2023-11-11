import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import LoginSignup from './components/LoginSignup/LoginSignup';
import {
  BrowserRouter as Router,
  Route,

Routes,history
} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Assuming the initial state is not logged in
    };
  }

  // Function to update the login state
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div>
        <LoginSignup onLogin={this.handleLogin} />
        {this.state.isLoggedIn && (
          <div>
            <Router>
              <Navbar />
              <Routes>
              <Route path='/general' element={<News key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={12} country='us' category='technology' />}></Route>
              </Routes>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default App;