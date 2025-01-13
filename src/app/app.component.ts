import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { formType } from './form-type';

@Component({
  selector: 'app-root',
  imports: [TodoAddComponent , TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: formType[] = [];
  selectedTodo: any;

  onView(data: formType[]) {
    console.log('on parrent after data push', data);
    this.todos = data;
  }

  getSelectedTask(selectedTodo: formType) {
    this.selectedTodo = selectedTodo;
    console.log(this.selectedTodo);
  }


}
