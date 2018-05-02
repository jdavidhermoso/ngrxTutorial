import Todo from '../../models/todo.model';

export interface TodoState extends Todo {
  loading: boolean;
  editable: boolean;
  edited: boolean;
  editing: boolean;
  selected: boolean;
  refreshing: boolean;
  create: boolean;
  error: boolean;
}

export interface TodoListState {
  todos: TodoState[];
  loading: boolean;
  pending: number;
}
