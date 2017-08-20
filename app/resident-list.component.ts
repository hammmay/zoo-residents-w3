import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'resident-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allResidents">All Residents</option>
    <option value="youngResidents">Young Residents</option>
    <option value="olderResidents" selected="selected">Older Residents</option>
  </select>


  <ul>
    <li *ngFor="let currentResident of childResidentList | youngAndOld:filterByYoungAndOld">Name: {{currentResident.name}}, Age In Years: {{currentResident.age}}

    <button (click)="editClicked(currentResident)">Make Some Changes</button></li>
  </ul>
  `
})

export class ResidentListComponent {
  @Input() childResidentList: Resident[];
  @Output() clickSender = new EventEmitter();

  editClicked(residentToEdit: Resident) {
    this.clickSender.emit(residentToEdit);
  }

  filterByYoungAndOld: string = "olderResidents";

  onChange(optionFromMenu) {
    this.filterByYoungAndOld = optionFromMenu;
  }

  // ageColor(currentResident){
  //   if (currentResident.age >= 2){
  //     return "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }

}
