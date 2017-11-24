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
    template: `<h2>Pick your color</h2>



        <app-color (colorvalue)="ColorChangedHandler($event)"> </app-color>


         <h1> {{colorchosen}}</h1>

        <router-outlet></router-outlet>

`
})

export class ProductsComponent  implements OnInit {
    products;
    images;

    colorchosen = 0;

    @Output('colorvalue') colorValue = new EventEmitter();

    ngOnInit() {
        this.colorValue.emit(this.colorchosen);
    }

    ColorChangedHandler(color: number) {
        this.colorchosen = color;
        this.colorValue.emit(this.colorchosen);
    }
    constructor(productService: ProductService, imagesService: ImagesService) {
        this.products = productService.getProducts();
        this.images = imagesService.getColorArray();
    }
 }

