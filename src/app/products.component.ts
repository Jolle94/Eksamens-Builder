import {Component} from '@angular/core';
import {ProductService} from './product.service';
import { ColorComponent } from './color/color.component';
import { ImagesService } from './images.service';
@Component({
    selector:'products',
    styleUrls: ['./product.component.css'],
    providers: [ImagesService],
    template:`<h2>Pick your color</h2>
<ul>
    <li *ngFor="let product of products">
        {{product}}
    </li>
</ul>


<img *ngFor="let image of images" src="{{image}}">

    
<router-outlet></router-outlet> 

`
})

export class ProductsComponent{
    products;
    images;
    constructor(productService:ProductService,imagesService:ImagesService){
        this.products=productService.getProducts();
        this.images=imagesService.getColorArray();
    }
 }
 