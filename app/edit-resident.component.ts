import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'edit-resident',
  template: `
    <div>
      <div *ngIf="childSelectedResident">
         <h3>{{childSelectedResident.name}}</h3>
         <h4>Edit This Resident</h4>
         <label>Enter Resident's Name:</label>
         <input [(ngModel)]="childSelectedResident.name">
         <br>
         <label>Enter Resident's Age In Years:</label>
         <input [(ngModel)]="childSelectedResident.age">
         <br>
         <label>Enter Resident's Species:</label>
         <input [(ngModel)]="childSelectedResident.species">
         <br>
         <label>Enter Resident's Diet:</label>
         <input [(ngModel)]="childSelectedResident.diet">
         <br>
         <label>Enter Resident's Location:</label>
         <input [(ngModel)]="childSelectedResident.location">
         <br>
         <label>Enter Number of Caretakers Needed:</label>
         <input [(ngModel)]="childSelectedResident.caretakers">
         <br>
         <label>Enter Resident's Sex:</label>
         <input [(ngModel)]="childSelectedResident.sex">
         <br>
         <label>Enter Resident's Likes:</label>
         <input [(ngModel)]="childSelectedResident.likes">
         <br>
         <label>Enter Resident's Dislikes:</label>
         <input [(ngModel)]="childSelectedResident.dislikes">
         <br>
         <button (click)="doneButtonClicked()">Done</button>
       </div>
    </div>
  `
})

export class EditResidentComponent {
  @Input() childSelectedResident: Resident;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
