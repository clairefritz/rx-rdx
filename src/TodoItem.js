import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  render() {
    return (<li>{ this.props.todo.text }</li>);
  }
}

export default TodoItem;
