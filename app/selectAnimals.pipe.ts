import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "selectAnimals",
  pure: false

})

export class SelectAnimalPipe implements PipeTransform {
  transform(input: Animal[], filter, value){
    var valueHolder: string = value;
    if (filter === 'All'){
      return input;
    } else {
      var output: Animal []=[];
       for (var i=0; i<input.length; i++){
         if (input[i][filter] === valueHolder){
           output.push(input[i]);
         }
       }
       return output;
    }
  }
}
