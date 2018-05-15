import React, { Component } from 'react';
import Tabs from './components/tabs.component.js';
import Troopers from './components/troopers.component.js';
import Rooms from './components/rooms.component.js';
import Sync from './components/sync.component.js';
import logo from './logo.svg';
import './App.css';
import { generateDB } from './actions/indexeddb/generateDB';

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
    generateDB();
    var show;
    
    if(this.state.show == 'trooper') {
      show = <Troopers />;
    } else if(this.state.show == 'room') {
      show = <Rooms />;
    } else if(this.state.show == 'sync') {
      show = <Sync />
    }

    return (
      <div className="App">
        <Tabs handleClick={ this.handleClick } />

        { show }

      </div>
    );
  }
}

export default App;
