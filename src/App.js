import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Input from './Component/Input/Input';
import Form from './Component/Form/Form';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container mt-5">
          <Router>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">HOME</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="nav-link"><Link to="/about">ABOUT</Link></div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link"><Link to="/input">INPUT</Link></div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link"><Link to="/form">FORM</Link></div>
                    </li>
                  </ul>
                </div>
              </nav>

              <hr />

              <Switch>
                <Route exact path="/"><Redirect to='/home'/></Route>
                <Route path="/home"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/input"><Input /></Route>
                <Route path="/form"><Form /></Route>
                <Route path="**"><Home /></Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;