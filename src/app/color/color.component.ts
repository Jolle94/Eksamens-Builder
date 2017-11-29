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

  testframes;
  firebaseColour;
  @Output('colorvalue') colorValue = new EventEmitter();
  test = 0;

  constructor( imagesService: ImagesService) {

      this.testframes = imagesService.getFrameColorFirebase();
      this.firebaseColour = imagesService.getColoursFirebase();
  }

  ngOnInit() {
      this.colorValue.emit(this.test);
  }


    colourSwitch(value: number): number {

                this.test = value;
                this.colorValue.emit(value);
                console.log(value);
                return value;



  }



}
