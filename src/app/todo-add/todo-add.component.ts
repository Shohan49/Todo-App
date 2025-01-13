import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
    title: 'abc',
    description: 'bcd',
    dueDate: '2024-12-12'
  }
  @Output() viewData = new EventEmitter<formType[]>();
  @Input() passData: any;

  totalFormData: formType[] = [];
  // isFormValid: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['passData'] && changes['passData'].currentValue) {
      this.populateForm(changes['passData'].currentValue);
    }
  }

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

  populateForm(data: formType) {
    this.todoForm = { ...data }; // Populate the form with passed data
  }

  rest() {
    this.todoForm.title = '';
    this.todoForm.dueDate = '';
    this.todoForm.description = '';
    // console.log(this.totalFormData);
  }
}
