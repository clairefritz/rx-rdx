import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  renderItems = () => {
    return this.props.items.map((item, i) => {
      return (<TodoItem key={i} todo={item}/>)
    });
  }

  render() {
    return (
      <div>
        <TodoInput/>
        <ul>{ this.renderItems() }</ul>
      </div>
    )
  }
}

export default TodoList;
