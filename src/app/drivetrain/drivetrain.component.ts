import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImagesService} from "../images.service";

@Component({
  selector: 'app-drivetrain',
  templateUrl: './drivetrain.component.html',
  styleUrls: ['./drivetrain.component.css'],
    providers: [ImagesService]
})
export class DrivetrainComponent implements OnInit {

  driveTrainFirebase;
  driveTrains;
    @Output('driveTrainValue') driveTrainValue = new EventEmitter();

  constructor(imgService: ImagesService) {
    this.driveTrainFirebase = imgService.getDriveTrainsFirebase();
  }

  ngOnInit() {
      this.driveTrainFirebase.subscribe(res => { this.driveTrains = res;  });
  }

    driveTrainSwitch(value: number): number {


        this.driveTrainValue.emit(value);
        console.log(value);
        return value;



    }
}
