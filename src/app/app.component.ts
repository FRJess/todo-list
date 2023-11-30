import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';
import { TodoListService } from './services/todo-list.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService){
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(name: string){
    this.todoList.push({name});
  }
}
