import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';
import {ProductService} from './product.service';
import {StepperComponent} from './stepper.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
      // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
   //providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




