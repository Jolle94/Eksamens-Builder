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
                <img class="gallery" src="{{bike.frame.colour}}" style="padding-left:195px;" />
                <img class="gallery" src="{{bikeimages[0]}}" style="margin-top:-511px;overflow:auto;"/>
                <img class="gallery" src="{{bikeimages[2]}}" style="padding-left:290px;margin-top:-580px;float:left;overflow:auto;"/>
                <img class="gallery" src="{{bikeimages[3]}}" style="padding-left:230px;margin-top:-600px;float:left;overflow:auto;"/>


            </div>

            <app-stepper [bike]="bike" (colorvalue)="ColorChangedHandler($event)" style="margin: auto"></app-stepper>


        </div>



        </div>

        <div style="text-align: center;">
        <div class="text-center">
            <aside >
                <h2>Your Choices</h2>
                <label> Frame Colour: {{bike.frame.colourText}}</label>
            </aside>
        </div>

        </div>
    `})

export class ProductsComponent  implements OnInit {

    images;
    bikeimages;
    frameColor;
    bike: Bike;



    ColorChangedHandler(color: number) {
        for (let i = 0; i < this.frameColor.length; i++) {
            if (color === i) {


                this.bike = {
                        frame: {colour: this.frameColor[i].colour,
                        colourText: this.frameColor[i].colourText}
                        };
            }
        }
    }
    ngOnInit() {
    }


    constructor( imagesService: ImagesService) {

        this.images = imagesService.getColorArray();
        this.frameColor = imagesService.getFrameColor();
        this.bikeimages = imagesService.getBikeImages();
    }
 }

