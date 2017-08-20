import { Component } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'resident-list',
  template: `
  <ul>
    <li [class]="ageColor(currentResident)" *ngFor="let currentResident of residents">{{currentResident.name}}   <button (click)="editResident(currentResident)">Make Some Changes</button></li>
  </ul>
  `
})

export class ResidentListComponent {
  residents: Resident[] = [
    new Resident('Francis', 5),
    new Resident('George', 2),
    new Resident('Tom', 1)
  ];

  ageColor(currentResident){
    if (currentResident.age >= 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
