import Rx from 'rxjs';
import { ADD_TODO } from './actions'

export const action$ = new Rx.Subject();

const initState = {
  items: [
    { text: 'foo' },
    { text: 'bar' }
  ]
};

// Redux reducer
const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        items: [
          ...state.items,
          { text: action.payload }
        ]
      }
    default:
      return state;
  }
}

// The magic
export const store$ = action$.startWith(initState).scan(reducer);

// Higher order function to send actions to the stream
export const actionDispatcher = (func) => (...args) => {
  action$.next(func(...args))
};

export const addTodo = actionDispatcher((payload) => ({
  type: ADD_TODO,
  payload
}));
