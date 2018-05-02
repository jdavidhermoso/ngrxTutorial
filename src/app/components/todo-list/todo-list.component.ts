import {Component, OnInit} from '@angular/core';
import {TodoListState, TodoState} from '../../store/todo/todo.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as TodoAction from '../../store/todo/todo.action';
import Todo from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoListState$: Observable<TodoState[]>;

  constructor(private store: Store<TodoListState>) {
  }

  ngOnInit() {
    this.todoListState$ = this.store.select(function (state) {
      return state.todos;
    });
    this.store.dispatch(new TodoAction.GetTodos());
  }

  addMockedTask() {
    this.store.dispatch(new TodoAction.AddTodo({
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
    ));
  }
}
