import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Life Is A Zoo</h1>
    <h3>Add A New Resident OR Make Edits To An Existing Resident</h3>
    <ul>
      <li [class]="ageColor(currentResident)" *ngFor="let currentResident of residents">{{currentResident.name}}   <button (click)="editResident(currentResident)">Make Some Changes</button></li>
    </ul>
    <hr>
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
  residents: Resident[] = [
    new Resident('Francis', 5),
    new Resident('George', 2),
    new Resident('Tom', 1) ];
  selectedResident: null;

  editResident(clickedResident) {
    this.selectedResident = clickedResident;
  }

  finishedEditing() {
    this.selectedResident = null;
  }

  ageColor(currentResident){
    if (currentResident.age >= 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}

export class Resident {
  constructor(public name: string, public age: number) { }
}
