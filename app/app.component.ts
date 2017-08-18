import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Life Is A Zoo</h1>
    <h3>{{tagline}}</h3>
    <ul>
      <li>{{firstResident.name}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  tagline: string = 'Add A New Resident OR Make Edits To An Existing Resident';
  firstResident = {
    name: "Francis"
  }
}
