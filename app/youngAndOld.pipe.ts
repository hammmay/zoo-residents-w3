import {Pipe, PipeTransform} from '@angular/core';
import {Resident} from './resident.model';

@Pipe({
  name: "youngAndOld",
  pure: false
})


export class YoungAndOldPipe implements PipeTransform {

  transform(input: Resident[], desiredYoungAndOld) {
    var output: Resident[] = [];
    if(desiredYoungAndOld === "olderResidents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoungAndOld === "youngResidents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
