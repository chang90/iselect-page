import React, { Component } from 'react';
import './App.css';

import Cars from './views/Cars/Cars'

class App extends Component {
  render() {
  	const bgColor = {
    	background: '#eef0f2'
  	}
    return (
      <div className="App" style={bgColor}>
        <Cars/>
      </div>
    );
  }
}

export default App;
