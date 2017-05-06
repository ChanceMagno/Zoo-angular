import { Component } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a >New Animal</a></li>
        <li><a>Components</a></li>
        <li><a>JavaScript</a></li>
      </ul>
    </div>
  </nav>
  </div>
  <div class="container">

    <div class="row">
      <div class="col m10">
        <all-animals [childAnimalList]="masterAnimalList"> </all-animals>
      </div>
      <div class="col m2">
        <add-animal> </add-animal>
      </div>
    </div>
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

}
