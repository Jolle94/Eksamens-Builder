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
                    <img class="gallery" src="{{defaultBikeFrameColor?.urlColour}}" style="padding-left:195px;"/>
                    <img class="gallery" src="{{defaultBikeDrivetrain}}" style="margin-top:-511px;overflow:auto;"/>
                    <img class="gallery" src="{{defaultBikeSeat}}"
                         style="padding-left:290px;margin-top:-580px;float:left;overflow:auto;"/>
                    <img class="gallery" src="{{defaultBikeHandle}}"
                         style="padding-left:230px;margin-top:-600px;float:left;overflow:auto;"/>


                </div>

                <app-stepper [bike]="bike" (colorvalue)="ColorChangedHandler($event)" (driveTrainvalue)="DriveTrainChangedHandler($event)"
                             style="margin: auto"></app-stepper>


            </div>


        </div>




    `})

export class ProductsComponent  implements OnInit {

    bikeimages;

    bike: Bike;
    firebaseFramesColor;
    firebaseDriveTrainPictures;
    frames = [];
    dirvetrains = [];
    defaultBikeFrameColor: Frame;
    defaultBikeDrivetrain;
    defaultDrivetrainType;
    defaultBikeSeat;
    defaultBikeHandle;
    ColorChangedHandler(color: number) {


        for (let i = 0; i < this.frames.length; i++) {
            if (color === i) {

                this.defaultBikeFrameColor = {urlColour: this.frames[i]['urlColour'], colourText: this.frames[i]['textColour']};
               this.bike.frame = this.defaultBikeFrameColor;
            }
        }


    }
    DriveTrainChangedHandler(dt: number) {
        for (let i = 0; i < this.dirvetrains.length; i++) {
            if (dt === i) {

                this.defaultBikeDrivetrain =  this.dirvetrains[i]['url'];
                this.defaultDrivetrainType = this.dirvetrains[i]['text'];
                this.bike.drivetrain = this.defaultBikeDrivetrain;
                this.bike.drivetrainType = this.defaultDrivetrainType;
            }
        }
    }
    ngOnInit() {


        this.firebaseFramesColor.subscribe(res => {
            this.frames = res;
            this.defaultBikeFrameColor = {urlColour: res[0]['urlColour'], colourText: res[0]['textColour']};

        });
        this.firebaseDriveTrainPictures.subscribe(res => {
            this.dirvetrains = res;
            this.defaultBikeDrivetrain = res[0]['url'];
            this.defaultDrivetrainType = res[0]['text'];

        });
        this.bikeimages.subscribe(res => {

            this.defaultBikeDrivetrain = res[0]['url'];
            this.defaultBikeSeat = res[2]['url'];
            this.defaultBikeHandle = res[3]['url'];
            this.bike = { frame: {urlColour: res[1]['url'], colourText: res[1]['textColour']}, drivetrain: res[0]['url'], drivetrainType: ''};

        });




    }


constructor( imagesService: ImagesService) {


    this.bikeimages = imagesService.getBikeImages();
    this.firebaseFramesColor = imagesService.getFrameColorFirebase();
    this.firebaseDriveTrainPictures = imagesService.getDriveTrainsFirebase();



}
}



