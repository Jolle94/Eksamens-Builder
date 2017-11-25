import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ImagesService } from './images.service';
import {Bike} from './models/bike';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isValid = true;
  title = 'Bike';



  constructor() {

   }

}

