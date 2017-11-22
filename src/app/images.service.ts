import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {
  getColorArray() :string[]{
    return["http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-classic_1.png",
    "http://shop.larryvsharry.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/i/circle-race_1_1.png" ,
  ];

}

getBikeImages() :string[]{
  return["http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shimano_nexus_test.png",
  "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png",
  "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/seatpost_1.png",
  "http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_1.png"
];

}
  constructor() { }

}
