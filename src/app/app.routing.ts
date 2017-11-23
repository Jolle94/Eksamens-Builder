import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { StepperComponent } from './stepper/stepper.component';
import { ColorComponent } from './color/color.component';
import { FrameComponent } from './frame/frame.component';

export const routing = RouterModule.forRoot([
    {path: 'color', component: ColorComponent},
    {path: 'frame', component: FrameComponent},

]);

