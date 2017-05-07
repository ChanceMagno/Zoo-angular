import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector:'edit-animal',
  template:`

<md-card *ngIf="childSelectedAnimal">
<div class="row animalFormTitle">
  <md-card-title>	Edit {{childSelectedAnimal.name}}'s Information  </md-card-title>
</div>
<div class="row animalFormBody">
  <div class="col m6">
  <md-card-subtitle></md-card-subtitle>
   <div class="input-field" >
    <input value={{childSelectedAnimal.species}} required id=#species type="text" class="validate" #species>
      <label for='species'>Species:</label>
   </div>
   <div class="input-field" >
    <input  value={{childSelectedAnimal.name}} id=#name type="text" class="validate" #name>
      <label for='name'>Name:</label>
   </div>
   <div class="input-field" >
    <input  value={{childSelectedAnimal.age}} id=#age type="number" class="validate" #age>
      <label for='age'>Age:</label>
   </div>
   <div class="input-field" >
    <input  value={{childSelectedAnimal.location}} id=#location type="text" class="validate" #location>
      <label for='location'>Location:</label>
   </div>
   <div class="input-field" >
    <input value={{childSelectedAnimal.caretakers}} id=#caretakers type="number" class="validate" #caretakers>
      <label for='caretakers'>Care Takers:</label>
   </div>
   </div>
  <div class="col m6">
   <div class="input-field" >
    <input  value={{childSelectedAnimal.sex}} id=#sex type="text" class="validate" #sex>
      <label for='sex'>Sex:</label>
   </div>
   <div class="input-field" >
    <input value={{childSelectedAnimal.likes}} id=#likes type="text" class="validate" #likes>
      <label for='likes'>Likes:</label>
   </div>
   <div class="input-field" >
    <input  value={{childSelectedAnimal.dislikes}} id=#dislikes type="text" class="validate" #dislikes>
      <label for='dislikes'>Dislikes:</label>
   </div>
   <div class="input-field" >
    <input value={{childSelectedAnimal.dislikes}} id=#animalType type="text" class="validate" #animalType>
      <label for='animalType'>Animal Type:</label>
   </div>
   <div class="input-field" >
    <input value={{childSelectedAnimal.healthStatus}} id=#healthStatus type="text" class="validate" #healthStatus>
      <label for='healthStatus'>Health Status:</label>
   </div>
   </div>
   </div>
   <div class="row animalFormBody">
   <div class="col m6">
   <div class="input-field" >
    <input value={{childSelectedAnimal.diet}} id=#diet type="text" class="validate" #diet>
      <label for='diet'>Diet:</label>
   </div>
   </div>
   <div class="col m6">
   <a class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons"  md-button (click)="updateAnimal(species.value, name.value, age.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value, animalType.value, healthStatus.value, diet.value)" onclick="Materialize.toast('Animal Updated', 4000)">update</i></a>
   </div>
   </div>
  </md-card>
  `
})

export class EditAnimalComponent {
@Input() childSelectedAnimal: Animal;
@Output() updatedAnimalSender = new EventEmitter ();

updateAnimal(species, name, age, location, caretakers, sex, likes, dislikes, animalType, healthStatus, diet) {

  var updatedAnimal = new Animal(species, name, parseInt(age), location, parseInt(caretakers), sex, likes, dislikes, animalType, healthStatus, diet);
  var updatedAnimalInfo = [updatedAnimal, this.childSelectedAnimal];
  this.updatedAnimalSender.emit(updatedAnimalInfo);
  this.childSelectedAnimal = null;
}
}
