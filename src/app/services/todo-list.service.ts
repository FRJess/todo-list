import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {name: 'install NodeJS'},
    {name: 'install Angular CLI'},
    {name: 'create new app'},
    {name: 'serve app'},
    {name: 'develop app'},
    {name: 'deploy app'},
  ];

  constructor() {}
  
    getTodoList(): TodoItem[] {
      return this.todoList;
    }
}
