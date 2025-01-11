import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { formType } from '../form-type';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todosList: formType[] = [];
}
