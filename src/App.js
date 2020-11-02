import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home.js';
import ListPage from './ListPage.js';


export default class App extends Component {

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render = {(routerProps) => <Home {...routerProps}/>}
            />
            <Route 
              path="/pokelist/"
              exact
              render = {(routerProps) => <ListPage {...routerProps}/>}
            />
            <Route 
              path="/pokelist/:pokeId"
              exact
              render = {(routerProps) => <ListPage {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
