import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';



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
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule {

  
}