import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {AllAnimalComponent} from './allAnimals.component';
import {AddAnimalComponent} from './addAnimal.component';
import {EditAnimalComponent} from './editAnimal.component';
import {FilterAnimalComponent} from './filterAnimals.component';
import {FilterUniquePipe} from './filterUnique.pipe';
import {SelectAnimalPipe} from './selectAnimals.pipe';



import { FormsModule } from '@angular/forms';

// import { AngularFireModule } from 'angularfire2';
// import { masterFirebaseConfig } from './api-keys';

// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// }

@NgModule({
  imports: [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule.forRoot(),
],
  declarations: [ AppComponent, AllAnimalComponent, AddAnimalComponent, EditAnimalComponent, FilterAnimalComponent, FilterUniquePipe, SelectAnimalPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule {


}
