import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { formType } from '../form-type';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  todoForm: formType = {
    title: '',
    description: '',
    dueDate: ''
  }
  @Output() viewData = new EventEmitter<formType[]>();

  totalFormData: formType[] = [];
  // isFormValid: boolean = true;

  submit() {
    if((this.todoForm.title !== '' || this.todoForm.description !== '', this.todoForm.dueDate !== '')) {
      this.totalFormData.push({...this.todoForm});
      this.viewData.emit(this.totalFormData);
      this.rest();
    } else {
      alert('Please fill the form');
    }
    // console.log(this.todoForm);
  }

  rest() {
    this.todoForm.title = '';
    this.todoForm.dueDate = '';
    this.todoForm.description = '';
    // console.log(this.totalFormData);
  }
}
