import React, { Component } from 'react';
import TodoList from './TodoList.js'
import logo from './logo.svg';
import './App.css';
import { store$ } from './rdx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    store$.subscribe((state) => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TodoList {...this.state}/>
      </div>
    );
  }
}

export default App;
