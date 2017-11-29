import { Injectable } from '@angular/core';
import {Frame} from './models/frame';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class ImagesService {

    frames: Observable<any[]>;
    colours: Observable<any[]>;
    constructor(private db: AngularFireDatabase) {
        this.frames = this.db.list('frames').valueChanges();
        this.colours = db.list('colours').valueChanges();
    }




  getBikeImages(): string[] {
    return['http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shimano_nexus_test.png',
    'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png',
    'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/seatpost_1.png',
    'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_1.png'
    ];
  }
  getFrameColor(): Frame[] {
    return[{urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7602a06e-7dfd-4da2-9236-7c7c1d1c935f_lan.png', colourText: 'Black'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/e/0ebe28ba-3ccf-4560-9684-b67aecedf926_lan_1.png', colourText: 'Dark Green'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/3/d3d191ec-5c56-4f98-a09f-3ae15c0288c9_lan.png', colourText: 'Red'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/d/7d4fce74-98ba-4287-9ee2-65d20cdb15ae_lan.png', colourText: 'Yellow'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/b/9b2ef14c-f49e-4a05-853b-db23ff79eee5_lan.png', colourText: 'Blue'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/0/40187135-0678-464e-b271-94858b8cb211_lan.png', colourText: 'White'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/97793645-5baf-4b8a-806a-2892be2ffc40_lan.png', colourText: 'Orange'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/2/b2780838-d00f-49c7-b191-dbcefd5acc14_lan.png', colourText: 'Light Green'},
        {urlColour: 'http://shop.larryvsharry.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20e3d6df-b344-4640-9435-c25681c6430a_lan.png', colourText: 'Grey'}
    ];
  }


  getColoursFirebase() {

        return this.colours;
  }
  getFrameColorFirebase() {
        return this.frames.map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

  }

}
