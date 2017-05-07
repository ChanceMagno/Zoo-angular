import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './animal.model';


@Component({
  selector:'add-animal',
  template:`
  <md-card id="addKegForm">
    <md-card-title>	 New Animal  </md-card-title>
    <md-card-subtitle></md-card-subtitle>
     <div class="input-field" >
      <input  id=#species type="text" class="validate" #species>
        <label for='species'>Species</label>
     </div>
     <div class="input-field" >
      <input  id=#name type="text" class="validate" #name>
        <label for='name'>Name</label>
     </div>
     <div class="input-field" >
      <input  id=#age type="number" class="validate" #age>
        <label for='age'>Age</label>
     </div>
     <div class="input-field" >
      <input  id=#location type="text" class="validate" #location>
        <label for='location'>Location</label>
     </div>
     <div class="input-field" >
      <input  id=#caretakers type="number" class="validate" #caretakers>
        <label for='caretakers'>Amount of Care Takers</label>
     </div>
     <div class="input-field" >
      <input  id=#sex type="text" class="validate" #sex>
        <label for='sex'>Sex</label>
     </div>
     <div class="input-field" >
      <input  id=#likes type="text" class="validate" #likes>
        <label for='likes'>Likes</label>
     </div>
     <div class="input-field" >
      <input  id=#dislikes type="text" class="validate" #dislikes>
        <label for='dislikes'>Dislikes</label>
     </div>
     <div class="input-field" >
      <input  id=#animalType type="text" class="validate" #animalType>
        <label for='animalType'>Animal Type</label>
     </div>
     <div class="input-field" >
      <input  id=#healthStatus type="text" class="validate" #healthStatus>
        <label for='healthStatus'>Health Status</label>
     </div>
     <div class="input-field" >
      <input  id=#diet type="text" class="validate" #diet>
        <label for='diet'>Diet</label>
     </div>
     <button md-button (click)="addNewAnimal(species.value, name.value, age.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value, animalType.value, healthStatus.value, diet.value)"> Add Animal </button>
    </md-card>
  `
})

export class AddAnimalComponent {
  @Output () newAnimalSender = new EventEmitter();
    // newAnimalForm: string [];
    // formLabels: string [] = ['Species', 'Name', 'Age', 'Location', 'Care Takers', 'Sex', 'Likes', 'Dislikes', 'Animal Type', 'Health Status', 'Diet'];
    // animalFormVariable: string [] = ['species', 'name', 'age', 'location', 'caretakers', 'sex', 'likes', 'dislikes', 'animaleType', 'healthStatus', 'diet'];

    addNewAnimal(species, name, age, location, caretakers, sex, likes, dislikes, animalType, healthStatus, diet){
      console.log(species, name, age, location, caretakers, sex, likes, dislikes, animalType, healthStatus, diet)
      var newAnimal: Animal = new Animal(species, name, parseInt(age), location, parseInt(caretakers), sex, likes, dislikes, animalType, healthStatus, diet);
      this.newAnimalSender.emit(newAnimal)

    }

}
// species.value, name.value, location.value, likes.value, dislikes.value, animaleType.value
