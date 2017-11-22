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
import {ProductsComponent} from './products.component';
import {ProductService} from './product.service';
import { StepperComponent } from './stepper/stepper.component';
import { ColorComponent } from './color/color.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, StepperComponent, ColorComponent, FrameComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
      // Include it under 'imports' in your application module
    // after BrowserModule.
  
    HttpClientModule,
    FormsModule,ReactiveFormsModule,

    HttpModule,
    MatStepperModule,MatFormFieldModule
  ],
   //providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }