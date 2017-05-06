import React, { Component } from 'react';
import config from './config';
import fetchJson from './common/util/fetchJson';

class App extends Component {
  
  //Demo method for fetching via AJAX
  //This method would be somewhere else (like Redux) in a real app
  async fetchMenus() {
    return await fetchJson(config.apiBaseUrl + 'v1/entities/menu/all');
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
