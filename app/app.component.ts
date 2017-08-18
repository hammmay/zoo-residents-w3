import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Life Is A Zoo</h1>
    <h3>{{tagline}}</h3>
    <ul>
      <li [class]="ageColor(currentResident)" *ngFor="let currentResident of residents">{{currentResident.name}}   <button (click)="editResident()">Make Some Changes</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  tagline: string = 'Add A New Resident OR Make Edits To An Existing Resident';
  residents: Resident[] = [
    new Resident('Francis', 5),
    new Resident('George', 4),
    new Resident('Tom', 1)
  ];

  editResident() {
    alert("Click is working");
  }

  ageColor(currentResident){
    if (currentResident.age >= 2){
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

}

export class Resident {
  constructor(public name: string, public age: number) { }
}
