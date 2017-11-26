import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImagesService} from '../images.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [ImagesService]

})

export class ColorComponent implements OnInit {

  images;

  @Output('colorvalue') colorValue = new EventEmitter();
  test = 0;

  constructor( imagesService: ImagesService) {
      this.images = imagesService.getColorArray();
  }

  ngOnInit() {
      this.colorValue.emit(this.test);
  }


    colourSwitch(value: number): number {

        for (let i = 0; i < this.images.length; i++) {
                if (value === i) {
                   this.test = value;
                   this.colorValue.emit(this.test);
                    console.log(value);
                    return value;
                }
            }


    }


}
