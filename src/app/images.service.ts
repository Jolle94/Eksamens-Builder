import { Injectable } from '@angular/core';
import {Frame} from "./models/frame";

@Injectable()
export class ImagesService {
  getColorArray() :string[]{
    return["http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-classic_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-race_1_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/e/pepper_color.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/u/submarine_color.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-bluebird_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-generic_2.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-clockwork_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-lizzard-king_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-raw_1.png"
    ];
  }

  getBikeImages() :string[]{
    return["http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shimano_nexus_test.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/seatpost_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_1.png"
    ];
  }
  getFrameColor(): Frame[] {
    return[{colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png", colourText: 'Black'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/e/0ebe28ba-3ccf-4560-9684-b67aecedf926_lan_1.png", colourText: 'Dark Green'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/3/d3d191ec-5c56-4f98-a09f-3ae15c0288c9_lan.png", colourText: 'Red'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/d/7d4fce74-98ba-4287-9ee2-65d20cdb15ae_lan.png", colourText: 'Yellow'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/b/9b2ef14c-f49e-4a05-853b-db23ff79eee5_lan.png", colourText: 'Blue'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/0/40187135-0678-464e-b271-94858b8cb211_lan.png", colourText: 'White'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/97793645-5baf-4b8a-806a-2892be2ffc40_lan.png", colourText: 'Orange'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/2/b2780838-d00f-49c7-b191-dbcefd5acc14_lan.png", colourText: 'Light Green'},
        {colour: "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20e3d6df-b344-4640-9435-c25681c6430a_lan.png", colourText: 'Grey'}
    ];
  }
  constructor() { }

}
