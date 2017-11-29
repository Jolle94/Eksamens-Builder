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


  constructor( imagesService: ImagesService) {

      this.testframes = imagesService.getFrameColorFirebase();
      this.firebaseColour = imagesService.getColoursFirebase();
  }

  ngOnInit() {

  }


    colourSwitch(value: number): number {


                this.colorValue.emit(value);
                console.log(value);
                return value;



  }



}
