// src/App.js
import React from 'react';
import './App.css';
import News from './News';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <h1>Latest News</h1>
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={News} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
