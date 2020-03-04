import React, { Component } from 'react';
import './App.css';
import CoinContainer from './CoinContainer'
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <CoinContainer/> 
    </div>;
  }
}

export default App;
