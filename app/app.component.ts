import { Component } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Life Is A Zoo</h1>
      <h3>Add A New Resident OR Make Edits To An Existing Resident</h3>
      <resident-list [childResidentList]="masterResidentList" (clickSender)="editResident($event)"></resident-list>
      <hr>
      <edit-resident [childSelectedResident]="selectedResident" (doneButtonClickedSender)="finishedEditing()"></edit-resident>
      <new-resident (newResidentSender)="addResident($event)"></new-resident>
    </div>
  `
})

export class AppComponent {
  selectedResident: null;

  masterResidentList: Resident[] = [
  ];


  editResident(clickedResident) {
    this.selectedResident = clickedResident;
  }

  finishedEditing() {
    this.selectedResident = null;
  }

  addResident(newResidentFromChild: Resident) {
    this.masterResidentList.push(newResidentFromChild);
  }

}
