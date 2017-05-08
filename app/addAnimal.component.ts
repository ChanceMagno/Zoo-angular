import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Animal} from './animal.model';

declare var jQuery: any;

@Component({
  selector:'add-animal',
  template:`
  <md-card id="addAnimalForm">
  <div class="row animalFormTitle">
    <md-card-title>	 New Animal  </md-card-title>
  </div>
  <div class="row animalFormBody">
    <div class="col m6">
    <md-card-subtitle></md-card-subtitle>
     <div class="input-field" >
      <input  required id=#species type="text" class="validate" #species>
        <label for='species'>Species:</label>
     </div>
     <div class="input-field" >
      <input  id=#name type="text" class="validate" #name>
        <label for='name'>Name:</label>
     </div>
     <div class="input-field" >
      <input  id=#age type="number" class="validate" #age>
        <label for='age'>Age:</label>
     </div>
     <div class="input-field" >
      <input  id=#location type="text" class="validate" #location>
        <label for='location'>Location:</label>
     </div>
     <div class="input-field" >
      <input  id=#caretakers type="number" class="validate" #caretakers>
        <label for='caretakers'>Care Takers:</label>
     </div>
     </div>
    <div class="col m6">
     <div class="input-field" >
      <input  id=#sex type="text" class="validate" #sex>
        <label for='sex'>Sex:</label>
     </div>
     <div class="input-field" >
      <input  id=#likes type="text" class="validate" #likes>
        <label for='likes'>Likes:</label>
     </div>
     <div class="input-field" >
      <input  id=#dislikes type="text" class="validate" #dislikes>
        <label for='dislikes'>Dislikes:</label>
     </div>
     <div class="input-field" >
      <input  id=#animalType type="text" class="validate" #animalType>
        <label for='animalType'>Animal Type:</label>
     </div>
     <div class="input-field" >
      <input  id=#healthStatus type="text" class="validate" #healthStatus>
        <label for='healthStatus'>Health Status:</label>
     </div>
     </div>
     </div>
     <div class="row animalFormBody">
     <div class="col m6">
     <div class="input-field" >
      <input  id=#diet type="text" class="validate" #diet>
        <label for='diet'>Diet:</label>
     </div>
     </div>
     <div class="col m6">
     <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons"  md-button (click)="addNewAnimal(species.value, name.value, age.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value, animalType.value, healthStatus.value, diet.value)" onclick="Materialize.toast('Animal Saved', 4000)" >add</i></a>
     </div>
     </div>
    </md-card>
  `
})

export class AddAnimalComponent {
  @Output () newAnimalSender = new EventEmitter();

    addNewAnimal(species, name, age, location, caretakers, sex, likes, dislikes, animalType, healthStatus, diet){

      var newAnimal: Animal = new Animal(species, name, parseInt(age), location, parseInt(caretakers), sex, likes, dislikes, animalType, healthStatus, diet);
      this.newAnimalSender.emit(newAnimal);

    }


}
