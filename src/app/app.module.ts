import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { StepperComponent } from './stepper/stepper.component';
import { ColorComponent } from './color/color.component';
import { FrameComponent } from './frame/frame.component';
import { routing } from './app.routing';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import { DrivetrainComponent } from './drivetrain/drivetrain.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyCcj0oUNt9nUU3-g_eMv6f1qAuUFSJSg14',
    authDomain: 'jose-bikebuiler.firebaseapp.com',
    databaseURL: 'https://jose-bikebuiler.firebaseio.com',
    projectId: 'jose-bikebuiler',
    storageBucket: 'jose-bikebuiler.appspot.com',
    messagingSenderId: '657052964055'
};
@NgModule({
  declarations: [
    AppComponent, ProductsComponent, StepperComponent, ColorComponent, FrameComponent, DrivetrainComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
      // Include it under 'imports' in your application module
    // after BrowserModule.

    HttpClientModule,
    FormsModule, ReactiveFormsModule,

    HttpModule,
    MatStepperModule, MatFormFieldModule,
    routing,
      AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
