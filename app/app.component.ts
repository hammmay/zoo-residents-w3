import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Life Is A Zoo</h1>
    <h3>{{tagline}}</h3>
    <ul>
      <li *ngFor="let currentResident of residents">{{currentResident.name}}   <button (click)="editResident()">Make Some Changes</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  tagline: string = 'Add A New Resident OR Make Edits To An Existing Resident';
  residents: Resident[] = [
    new Resident('Francis'),
    new Resident('George'),
    new Resident('Tom')
  ];

  editResident() {
    alert("Click is working");
  }
}

export class Resident {
  constructor(public name: string) { }
}
