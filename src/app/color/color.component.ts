import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../images.service';

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

  imageUrl1 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-race_1_1.png';
  imageUrl2 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/e/pepper_color.png';
  imageUrl3 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/u/submarine_color.png';
  imageUrl4 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-bluebird_1.png';
  imageUrl5 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-generic_2.png';
  imageUrl6 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-clockwork_1.png';
  imageUrl7 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-lizzard-king_1.png';
  imageUrl8 ='http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-raw_1.png';
 

  constructor() { }

  ngOnInit() {
  }

}
