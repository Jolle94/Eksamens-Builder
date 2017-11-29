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
                    <img class="gallery" src="{{bike?.frame.urlColour}}" style="padding-left:195px;"/>
                    <img class="gallery" src="{{i1}}" style="margin-top:-511px;overflow:auto;"/>
                    <img class="gallery" src="{{i2}}"
                         style="padding-left:290px;margin-top:-580px;float:left;overflow:auto;"/>
                    <img class="gallery" src="{{i3}}"
                         style="padding-left:230px;margin-top:-600px;float:left;overflow:auto;"/>


                </div>

                <app-stepper [bike]="bike" (colorvalue)="ColorChangedHandler($event)"
                             style="margin: auto"></app-stepper>


            </div>


        </div>




    `})

export class ProductsComponent  implements OnInit {

    bikeimages;

    bike: Bike;
    firebaseTest;
    frames;
    i1;
    i2;
    i3;
    ColorChangedHandler(color: number) {


        for (let i = 0; i < this.frames.length; i++) {
            if (color === i) {
                this.bike = { frame: {urlColour: this.frames[i]['urlColour'], colourText: this.frames[i]['textColour']}};
            }
        }


    }

    ngOnInit() {

        this.firebaseTest.subscribe(res => {
            this.frames = res;
            this.bike = { frame: {urlColour: res[0]['urlColour'], colourText: res[0]['textColour']}};

        });

        this.bikeimages.subscribe(res => {

            this.i1 = res[0]['url'];
            this.i2 = res[2]['url'];
            this.i3 = res[3]['url'];
        });



    }


constructor( imagesService: ImagesService) {


    this.bikeimages = imagesService.getBikeImages();
    this.firebaseTest = imagesService.getFrameColorFirebase();



}
}



