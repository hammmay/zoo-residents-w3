import { Component } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Life Is A Zoo</h1>
      <h3>Add A New Resident OR Make Edits To An Existing Resident</h3>
      <hr>
      <resident-list></resident-list>
      <div>
        <div *ngIf="selectedResident">
           <h3>{{selectedResident.name}}</h3>
           <h4>Edit This Resident</h4>
           <label>Enter Resident's Name:</label>
           <input [(ngModel)]="selectedResident.name">
           <br>
           <label>Enter Resident's Age In Years:</label>
           <input [(ngModel)]="selectedResident.age">
           <br>
           <button (click)="finishedEditing()">Done</button>
         </div>
      </div>
    </div>
  `
})

export class AppComponent {
  selectedResident: null;

  editResident(clickedResident) {
    this.selectedResident = clickedResident;
  }

  finishedEditing() {
    this.selectedResident = null;
  }

}
