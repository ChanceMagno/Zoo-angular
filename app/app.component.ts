import { Component } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Test {{masterAnimalList[0].species}} </h1>
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
