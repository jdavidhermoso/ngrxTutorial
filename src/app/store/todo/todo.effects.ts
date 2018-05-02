import * as TodoActions from './todo.action';
import {TodoState} from './todo.state';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import Todo from '../../models/todo.model';

export const mockedTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    loading: false,
    editable: true,
    edited: false,
    editing: false,
    selected: false,
    refreshing: false,
    create: true,
    error: false,
  }
];

@Injectable()
export class TodoEffects {


  constructor(private http: HttpClient,
              private actions$: Actions) {
  }

  @Effect()
  GetTodos$: Observable<Action> = this.actions$.ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS)
    .map(() => {
      return new TodoActions.GetTodosSuccess(mockedTodoStates);
    });
}

