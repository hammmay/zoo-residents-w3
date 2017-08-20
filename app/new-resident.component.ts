import { Component, Output, EventEmitter } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'new-resident',
  template: `
    <h3>Add A New Resident</h3>
      <div>
        <label>Enter New Resident's Name:</label>
        <input #newName>
        <br>
        <label>Enter New Resident's Age In Years:</label>
        <input #newAge>
      </div>
      <div>
        <button (click)="submitForm(newName.value, newAge.value); newName.value=''; newAge.value='';">Add This Resident</button>
      </div>
  `
})

export class NewResidentComponent {
  @Output() newResidentSender = new EventEmitter();

  submitForm(name: string, age: number) {
    var newResidentToAdd: Resident = new Resident(name, age);
    this.newResidentSender.emit(newResidentToAdd);
  }
}
