import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "uniqueness",
  pure: false
})

export class FilterUniquePipe implements PipeTransform {
  transform(input: Animal [], variable){

    var animalSet = new Set();
      for (var i=0; i<input.length; i++){
        animalSet.add(input[i][variable]);
      }
      return animalSet;
  }
}
