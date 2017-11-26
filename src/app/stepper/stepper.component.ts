import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    @Input('bike') bike;
    @Output('colorvalue') colorValue = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) { }


  ngOnInit() {
      this.colorValue.emit(this.colorchosen);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

    ColorChangedHandler(color: number) {
        this.colorchosen = color;
        this.colorValue.emit(this.colorchosen);
    }
}
