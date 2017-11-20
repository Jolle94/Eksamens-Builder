import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { StepperComponent} from './stepper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})


export class AppComponent {
  title = 'something';
  imageUrl = 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shimano_nexus_test.png';
  imageUrl2 = 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png';
  imageUrl3 = 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/seatpost_1.png';
  imageUrl4 = 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_1.png';
}
 
