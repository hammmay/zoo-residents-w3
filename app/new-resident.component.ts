import { Component, Output, EventEmitter } from '@angular/core';
import { Resident } from './resident.model';

@Component({
  selector: 'new-resident',
  template: `
    <h3>Add A New Resident</h3>
      <div>
        <label>Enter New Resident's Name:</label>
        <input #newName>
        <br>
        <label>Enter New Resident's Age In Years:</label>
        <input #newAge>
        <br>
        <label>Enter New Resident's Species:</label>
        <input #newSpecies>
        <br>
        <label>Enter New Resident's Diet:</label>
        <input #newDiet>
        <br>
        <label>Enter New Resident's Location:</label>
        <input #newLocation>
        <br>
        <label>Number of Caretakers needed for New Resident:</label>
        <input #newCaretakers>
        <br>
        <label>Enter New Resident's Sex:</label>
        <input #newSex>
        <br>
        <label>Enter New Resident's Likes:</label>
        <input #newLikes>
        <br>
        <label>Enter New Resident's Dislikes:</label>
        <input #newDislikes>
        <br>
      </div>
      <div>
        <button (click)="submitForm(newName.value, newAge.value, newSpecies.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newAge.value=''; newSpecies.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add This Resident</button>
      </div>
  `
})

export class NewResidentComponent {
  @Output() newResidentSender = new EventEmitter();

  submitForm(name: string, age: number, species: string, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newResidentToAdd: Resident = new Resident(name, age, species, diet, location, caretakers, sex, likes, dislikes);
    this.newResidentSender.emit(newResidentToAdd);
  }
}
