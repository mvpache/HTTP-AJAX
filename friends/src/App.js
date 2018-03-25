import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ FriendsList } />
          <Route path = "/addfriend" component={ AddFriend } />
        </div>
      </Router>
    );
  }
}

export default App;
