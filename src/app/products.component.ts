import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from './product.service';
import { ColorComponent } from './color/color.component';
import { ImagesService } from './images.service';
import {Bike} from './models/bike';
import {Frame} from './models/frame';
@Component({
    selector: 'products',
    styleUrls: ['./product.component.css'],
    providers: [ImagesService],
    template: `

        <div class="row">

            <div class="row" style="text-align: center;">
                <div class="col-md-8">
                    <img class="gallery" src="{{bike.frame.urlColour}}" style="padding-left:195px;"/>
                    <img class="gallery" src="{{bikeimages[0]}}" style="margin-top:-511px;overflow:auto;"/>
                    <img class="gallery" src="{{bikeimages[2]}}"
                         style="padding-left:290px;margin-top:-580px;float:left;overflow:auto;"/>
                    <img class="gallery" src="{{bikeimages[3]}}"
                         style="padding-left:230px;margin-top:-600px;float:left;overflow:auto;"/>


                </div>

                <app-stepper [bike]="bike" (colorvalue)="ColorChangedHandler($event)"
                             style="margin: auto"></app-stepper>


            </div>


        </div>




    `})

export class ProductsComponent  implements OnInit {


    bikeimages;
    frameColor;
    bike: Bike;
   firebaseTest;


    ColorChangedHandler(color: number) {
        for (let i = 0; i < this.frameColor.length; i++) {
            if (color === i) {


                this.bike = {
                        frame: {urlColour: this.frameColor[i].urlColour,
                        colourText: this.frameColor[i].colourText}
                        };
            }
        }
    }
    ngOnInit() {
        this.bike = { frame: {urlColour: this.frameColor[0].urlColour, colourText:  this.frameColor[0].colourText}};
    }


    constructor( imagesService: ImagesService) {


        this.frameColor = imagesService.getFrameColor();
        this.bikeimages = imagesService.getBikeImages();
        this.firebaseTest = imagesService.getFrameColorFirebase();
    }
 }

