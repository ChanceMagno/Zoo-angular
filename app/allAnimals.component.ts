import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';


@Component({
  selector: 'all-animals',
  template: `


  <md-grid-list cols="3"  gutterSize="10px">
    <md-grid-tile class="animalCard" *ngFor="let animal of childAnimalList;">
      <md-card *ngIf = "animal !== selectedAnimal">
      <md-card-title>
        <div class="row">
          <div class="col m10">
            <h5>{{animal.species}}</h5>
          </div>
          <div class="col m2">
            <a class="btn-floating btn-large waves-effect waves-light blue" (click)="showEdit(animal)"><i class="material-icons">edit</i></a>
          </div>
        </div>
      </md-card-title>
      <div class="row">
        <div class="col m6">
          <ul>
           <li>Name:  {{animal.name}}</li>
           <li>Type:  {{animal.animalType}}</li>
           <li>Age:  {{animal.age}}</li>
           <li>Species:  {{animal.species}}</li>
           <li>Location:  {{animal.location}}</li>
           <li>Sex:  {{animal.sex}}</li>
          </ul>
        </div>
        <div class="col m6">
          <ul>
           <li>Number of Caretakers:  {{animal.caretakers}}</li>
           <li>Likes:  {{animal.likes}}</li>
           <li>Dislikes:  {{animal.dislikes}}</li>
           <li>Health Status:  {{animal.healthStatus}}</li>
           <li>Diet:  {{animal.diet}}</li>
          </ul>
        </div>
       </div>
      </md-card>
    </md-grid-tile>
  </md-grid-list>
  `
})


export class AllAnimalComponent {
  @Input() childAnimalList: Animal [];
  @Output() displayEdit = new EventEmitter ();
  selectedAnimal: Animal;

  showEdit(animal) {
    this.displayEdit.emit(animal);
    this.selectedAnimal = animal;
  }
}
