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
        <li><a (click)="sidenav.open()" id="addKegButton">Add Animal</a></li>
      </ul>
    </div>
  </nav>
  <md-sidenav #sidenav class="example-sidenav" mode="push">
    <add-animal (newAnimalSender)="addNewAnimal($event)"> </add-animal>
  </md-sidenav>
  <div class="container">
    <div class="row">
      <div class="col m10">
        <all-animals [childAnimalList]="masterAnimalList"> </all-animals>
      </div>
      <div class="col m2">
      </div>
    </div>
  </div>
  </md-sidenav-container>
  </div>
`
})


export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
    new Animal('Arctic Fox', 'Moon', 2,  'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises', 'mammal', 'healthy', 'carnivore'),
  ];

  addNewAnimal(newAnimal){
    this.masterAnimalList.push(newAnimal);

  }

}
