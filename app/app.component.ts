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
    </div>
  `
})

export class AppComponent {
  selectedResident: null;

  masterResidentList: Resident[] = [
    new Resident('Francis', 5),
    new Resident('George', 2),
    new Resident('Tom', 1)
  ];


  editResident(clickedResident) {
    this.selectedResident = clickedResident;
  }

  finishedEditing() {
    this.selectedResident = null;
  }

}
