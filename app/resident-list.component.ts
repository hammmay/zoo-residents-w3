import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'resident-list',
  template: `
  <ul>
    <li *ngFor="let currentResident of childResidentList">{{currentResident.name}} <button (click)="editClicked(currentResident)">Make Some Changes</button></li>
  </ul>
  `
})

export class ResidentListComponent {
  @Input() childResidentList: Resident[];
  @Output() clickSender = new EventEmitter();

  editClicked(residentToEdit: Resident) {
    this.clickSender.emit(residentToEdit);
  }

  ageColor(currentResident){
    if (currentResident.age >= 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
