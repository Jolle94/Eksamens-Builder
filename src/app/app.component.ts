import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ImagesService } from './images.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, ImagesService]
})


export class AppComponent {
  isValid = true;
  title = 'Bike';
  bikeimages; 
  constructor(bikeimagesservice:ImagesService) {
    this.bikeimages=bikeimagesservice.getBikeImages();
   }
   
}
 
