import React, { Component } from 'react';
import Tabs from './components/tabs.component.js';
import Troopers from './components/troopers.component.js';
import Rooms from './components/rooms.component.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: 'trooper'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    return () => {
      this.setState(() => {
        return {
          show: tab
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Tabs handleClick={ this.handleClick } />

        { this.state.show == 'trooper' ? <Troopers /> : <Rooms /> }

      </div>
    );
  }
}

export default App;
