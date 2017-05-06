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
      <input  id=#location type="text" class="validate" #location>
        <label for='location'>Species</label>
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
     <div class="col m3">
       <form>
        <h4>Sex</h4>
          <p>
            <input name="group1" type="radio" id="test1" [value]="Male"/>
            <label for="test1">Male</label>
          </p>
          <p>
            <input name="group1" type="radio" id="test2" [value]="Female"/>
            <label for="test2">Female</label>
          </p>
        </form>
      </div>






 <button md-button (click)="addNewAnimal(sex.value)"> Add Animal </button>
</md-card>
  `
})

export class AddAnimalComponent {
  @Output () newAnimalSender = new EventEmitter();
    // newAnimalForm: string [];
    // formLabels: string [] = ['Species', 'Name', 'Age', 'Location', 'Care Takers', 'Sex', 'Likes', 'Dislikes', 'Animal Type', 'Health Status', 'Diet'];
    // animalFormVariable: string [] = ['species', 'name', 'age', 'location', 'caretakers', 'sex', 'likes', 'dislikes', 'animaleType', 'healthStatus', 'diet'];

    addNewAnimal(sex){
      console.log(sex);
    }

}
// species.value, name.value, location.value, likes.value, dislikes.value, animaleType.value
