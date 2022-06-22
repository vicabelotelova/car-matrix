import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Car } from '../../_models/car.model';

@Component({
  selector: 'app-many-cars',
  templateUrl: './many-cars.component.html',
  styleUrls: ['./many-cars.component.scss']
})
export class ManyCarsComponent implements OnInit {
  @Input() cars: Car[] = [];
  @Output() car: EventEmitter<Car> = new EventEmitter<Car>();
  constructor() { }

  ngOnInit() {
  }

  OnCarClick(car: Car) {
    this.car.emit(car);
  }

}
