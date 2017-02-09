import React, { Component } from 'react';
import { addTodo } from './rdx';

class TodoInput extends Component {
  _handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      addTodo(e.target.value);
      this.refs.node.value = '';
    }
  }

  render() {
    return (
      <input
        type="text"
        ref="node"
        onKeyDown={ this._handleKeyPress }
      />
    );
  }
}

export default TodoInput;
