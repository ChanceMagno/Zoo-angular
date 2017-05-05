import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';


@Component({
  selector: 'all-animals',
  template: `
  <md-grid-list cols="3" gutterSize="10px">
    <md-grid-tile class="animalCard" *ngFor="let animal of childAnimalList;">
      <md-card>
      <md-card-title><h3>{{animal.species}}</h3></md-card-title>
      <md-card-subtitle>{{animal.animalType}}</md-card-subtitle>
       <Strong>Name: </Strong> {{animal.name}} <br>
       <Strong>Age: </Strong> {{animal.age}} <br>
       <Strong>Species: </Strong> {{animal.species}} <br>
       <Strong>Location: </Strong> {{animal.location}} <br>
       <Strong>Sex: </Strong> {{animal.sex}} <br>
       <Strong>Number of Caretakers: </Strong> {{animal.caretakers}} <br>
       <Strong>Likes: </Strong> {{animal.likes}} <br>
       <Strong>Dislikes: </Strong> {{animal.dislikes}} <br>
       <Strong>Health Status: </Strong> {{animal.healthStatus}} <br>
       <Strong>Diet: </Strong> {{animal.diet}} <br>

      </md-card>
    </md-grid-tile>
  </md-grid-list>
  `
})


export class AllAnimalComponent {
  @Input() childAnimalList: Animal [];
}
