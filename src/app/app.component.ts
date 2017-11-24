import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ImagesService } from './images.service';
import {Bike} from './models/bike';


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
  frameColor;

  frameimage;

    ColorChangedHandler(color: number) {
        for (let i = 0; i < this.frameColor.length; i++) {
            if (color === i) {

                this.frameimage = this.frameColor[i];
            }
        }
    }

  constructor(bikeimagesservice: ImagesService) {
    this.bikeimages = bikeimagesservice.getBikeImages();
    this.frameColor = bikeimagesservice.getFrameColor();
   }

}

