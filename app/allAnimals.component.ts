import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';


@Component({
  selector: 'all-animals',
  template: `

  <div class="row" *ngFor="let animal of childAnimalList;">
         <div class="col s12 m6 offset-m2">
           <div class="card blue-grey darken-1">
             <div class="card-content black-text">
               <span class="card-title">Species: {{animal.species}}</span>
               <div class="row">
               <div class="col m6 likes">
                 <ul>
                   <li><strong>Name: </strong>{{animal.name}}</li>
                   <li><strong>Type: </strong>{{animal.type}}</li>
                   <li><strong>Location: </strong>{{animal.location}}</li>
                   <li><strong>Sex: </strong>{{animal.sex}}</li>
                   <li><strong>Caretakers: </strong>{{animal.caretakers}}</li>
                   <li><strong>Diet: </strong>{{animal.diet}}</li>
                 </ul>
               </div>
                  <div class="col m4 likes">
                  {{animal.name}} Likes {{animal.likes}} and does not like {{animal.dislikes}}
                 </div>
               </div>
             </div>
             <div class="card-action">
              <a class="btn-floating btn-large waves-effect waves-light blue" (click)="showEdit(animal)"><i class="material-icons">edit</i></a>
             </div>
           </div>
         </div>
       </div>
  `
})


export class AllAnimalComponent {
  @Input() childAnimalList: Animal [];
  @Output() displayEdit = new EventEmitter ();
  @Output() showNavBar = new EventEmitter ();
  @Output() deleteAnimal = new EventEmitter ();
  selectedAnimal: Animal;

  showEdit(animal) {
    this.showNavBar.emit();
    this.displayEdit.emit(animal);
    this.selectedAnimal = animal;
  }

}
