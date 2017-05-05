import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './animal.model';


@Component({
  selector:'add-animal',
  template:`
  <md-card id="addKegForm">
    <md-card-title>	 New Animal  </md-card-title>
    <md-card-subtitle></md-card-subtitle>
     <div class="input-field" >
      <input  id="species" type="text" class="validate" #species>
        <label for="species">Species</label>
     </div>

 <button md-button (click)="addNewAnimal(species.value)"> Add Animal </button>
</md-card>
  `
})

export class AddAnimalComponent {
  @Output () newAnimalSender = new EventEmitter();

    addNewAnimal(species){
      console.log(species);
    }
}
