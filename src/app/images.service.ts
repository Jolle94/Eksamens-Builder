import { Injectable } from '@angular/core';
import {Frame} from './models/frame';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class ImagesService {

    frames: AngularFireList<any>;
    colours: AngularFireList<any>;
    bikes: AngularFireList<any>;
    drivetrains: AngularFireList<any>;
    constructor(private db: AngularFireDatabase) {
        this.bikes = this.db.list('bikeImages');
        this.colours = this.db.list('colours');
        this.frames = this.db.list('frames');
        this.drivetrains = this.db.list('driveetrain');
    }


  pushBike(data) {
        this.db.list('bikes').push(data);

  }

  getBikeImages() {

     return this.bikes.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

  }



  getColoursFirebase() {

        return this.colours.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

  }
  getFrameColorFirebase() {

        return this.frames.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });

  }

  getDriveTrainsFirebase() {

      return this.drivetrains.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }
}
