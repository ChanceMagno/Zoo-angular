import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Animal} from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'filter-animals',
  template: `
  <div class="row">
  <ul class="collapsible " data-collapsible="accordion">
  <div class="collapsible-header filter"><a (click)="filterOnClick(All, nothing)">All Animals</a></div>
    <li *ngFor="let category of animalCategories; let i = index">
    <div class="collapsible-header">{{animalCategoryDisplayName[i]}}</div>
      <div class="collapsible-body">
        <button md-button class="filterButtons" *ngFor = "let animal of childAnimalList|uniqueness:category"  (click)="filterOnClick(category, animal)"> {{animal}}</button>
      </div>
    </li>
  </ul>
</div>
  `
})

export class FilterAnimalComponent {
  @Input() childAnimalList: Animal [];
  @Output () filterSender = new EventEmitter;

  animalCategories: string [] = ['species', 'name', 'age', 'location', 'caretakers', 'sex', 'likes', 'dislikes', 'animalType', 'healthStatus', 'diet'];
  animalCategoryDisplayName: string [] = ['Species', 'Name', 'Age', 'Location', 'Caretaker', 'Sex', 'Likes', 'Dislikes', 'Animal Type', 'Health Status', 'Diet'];

  selectedOption: string;

  filterOnClick(value, selectedOption){
    var filterParams = [value, selectedOption];
    this.filterSender.emit(filterParams);
  }

  ngAfterViewInit() {
   jQuery('.collapsible').collapsible();
 }

}
