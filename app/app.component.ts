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
        <li><a (click)="sidenav.toggle()" id="addAnimalButton">Add Animal</a></li>
      </ul>
    </div>
  </nav>
  <md-sidenav #sidenav class="example-sidenav" mode="push">
    <add-animal (newAnimalSender)="addNewAnimal($event)" (closeNavBar)="sidenav.toggle()"> </add-animal>
    <edit-animal [childSelectedAnimal]="animalSelected"  (updatedAnimalSender)="updateAnimal($event)" (hideNavBar)="sidenav.toggle()"></edit-animal>
  </md-sidenav>
    <div class="row">
      <div class="col m10">
        <all-animals [childAnimalList]="masterAnimalList|selectAnimals:selectAnimalsFilterType:selectFilterValue" (displayEdit)="editAnimal($event)" (showNavBar)="sidenav.toggle()"> </all-animals>
      </div>
      <div class="col m2">
      <filter-animals [childAnimalList]="masterAnimalList" (filterSender)="filterSender($event)"></filter-animals>
      </div>
    </div>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Zoo Management Services</h5>
            <p class="grey-text text-lighten-4"></p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text"></h5>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2017 Copyright Text
        </div>
      </div>
    </footer>
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
