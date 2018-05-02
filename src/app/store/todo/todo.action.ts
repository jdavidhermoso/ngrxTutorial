import {TodoState} from './todo.state';
import {Action} from '@ngrx/store';

export const GET_TODOS = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
export const ADD_TODO = '[Todo] ADD_TODO';

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: TodoState) {
    console.log('Add todo success!');
  }
}

export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;

  constructor(public payload: TodoState[]) {
    console.log('Constructor todos success!');
  }
}

export type All = GetTodos | GetTodosSuccess | AddTodo;

