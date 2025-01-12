import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { formType } from '../form-type';
import { EmptyListComponent } from './empty-list/empty-list.component';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule , EmptyListComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todosList: formType[] = [];

  delete(indexNumber: number) {
    console.log('Delete the card', indexNumber);
    this.todosList.splice(indexNumber, 1)
  }
  
}
