import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImagesService} from "../images.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
    colorchosen = 0;
    driveTrainChosen = 0;
    @Input('bike') bike;
    @Output('colorvalue') colorValue = new EventEmitter();
    @Output('driveTrainvalue') driveTrainValue = new EventEmitter();

  constructor(private _formBuilder: FormBuilder, private pushService: ImagesService) { }


  ngOnInit() {
      this.colorValue.emit(this.colorchosen);
      this.driveTrainValue.emit(this.driveTrainChosen);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  orderBike()
  {
      this.pushService.pushBike(this.bike);
  }
    ColorChangedHandler(color: number) {
        this.colorchosen = color;
        this.colorValue.emit(this.colorchosen);
    }

    DriveTrainChangedHandler(dt: number) {
        this.driveTrainChosen = dt;
        this.driveTrainValue.emit(this.driveTrainChosen);
    }
}
