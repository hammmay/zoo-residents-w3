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
    <li *ngFor="let currentResident of childResidentList | youngAndOld:filterByYoungAndOld">Name: {{currentResident.name}}
    <br>
    Age In Years: {{currentResident.age}}
    <br>
    Species: {{currentResident.species}}
    <br>
    Diet: {{currentResident.diet}}
    <br>
    Location: {{currentResident.location}}
    <br>
    Caretakers: {{currentResident.caretakers}}
    <br>
    Sex: {{currentResident.sex}}
    <br>
    Likes: {{currentResident.likes}}
    <br>
    Dislikes: {{currentResident.dislikes}}
    <br>
    <button (click)="editClicked(currentResident)">Edit {{currentResident.name}}'s Details</button></li>
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

}
