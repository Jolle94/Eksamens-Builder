import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../images.service';
import { ProductsComponent } from '../products.component';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[ImagesService],
  template:
  `
  <img *ngFor="let image of images" src="{{image}}">
  `
})

export class ColorComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public currentImage;
  
  public setImage = (image) => {  
    if (this.currentImage === image) return;
    this.currentImage = image;
  }
}
