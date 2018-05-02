import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoListItemComponent} from './components/todo-list-item/todo-list-item.component';
import {StoreModule} from '@ngrx/store';
import * as TodoReducer from './store/todo/todo.reducers';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './store/todo/todo.effects';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({
      todos: TodoReducer.TodoReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
