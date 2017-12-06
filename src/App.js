import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './components/dash';
import {Switch, Route} from 'react-router-dom';
import AddPet from './components/addpet.js';
import ViewPet from './components/viewpet.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={Dash} exact path='/' />
          <Route component={ViewPet} path='/viewpet/:id'/>
          <Route component={AddPet} path='/addpet'/>
        </Switch>
      </div>
    );
  }
}

export default App;
