import {TodoListState} from './todo.state';
import * as TodoActions from './todo.action';


export type Action = TodoActions.All;
const defaultState: TodoListState = {
  todos: [],
  loading: false,
  pending: 0
};


export function TodoReducer(state = defaultState, action: Action) {
  console.log(state);
  switch (action.type) {
    case TodoActions.GET_TODOS: {
      return {...state, loaded: false, loading: true};
    }
    case TodoActions.GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: [
          ...action.payload
        ],
        loading: false
      };
    }

    case TodoActions.ADD_TODO: {

      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => {
            return todo._id !== action.payload._id;
          }),
          {
            ...action.payload
          }
        ],
        loading: false
      };
    }
  }
}



