import { Component, AfterViewInit } from '@angular/core';
import {Animal} from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <md-sidenav-container class="add-animal">
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo right">Portland Zoo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a (click)="sidenav.open()" id="addAnimalButton">Add Animal</a></li>
      </ul>
    </div>
  </nav>
  <md-sidenav #sidenav class="example-sidenav" mode="push">
    <add-animal (newAnimalSender)="addNewAnimal($event)"> </add-animal>
    <edit-animal [childSelectedAnimal]="animalSelected"  (updatedAnimalSender)="updateAnimal($event)"></edit-animal>
  </md-sidenav>

    <div class="row">
      <div class="col m10">
        <all-animals [childAnimalList]="masterAnimalList|selectAnimals:selectAnimalsFilterType:selectFilterValue" (displayEdit)="editAnimal($event)"> </all-animals>

      </div>
      <div class="col m2">
      <filter-animals [childAnimalList]="masterAnimalList" (filterSender)="filterSender($event)"></filter-animals>

      </div>
    </div>
  </md-sidenav-container>
  </div>
`
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Black Bear', 'Wolverine', 2,  'Southern Trail', 5, 'male', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
  ];

  animalSelected = null;
  selectAnimalsFilterType: string = "All";
  selectFilterValue: string;

  filterSender(filterParams){
    console.log(filterParams);
    this.selectFilterValue = filterParams[1];
    this.selectAnimalsFilterType = filterParams[0];
  }

  addNewAnimal(newAnimal) {
    this.masterAnimalList.push(newAnimal);
  }

  editAnimal(animal) {
    this.animalSelected = animal;
  }

  updateAnimal(updateInfo) {
    var index = this.masterAnimalList.indexOf(updateInfo[1]);
    this.masterAnimalList[index] = updateInfo[0];
  }


}
