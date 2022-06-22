import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../../_models/car.model';
import { CarSubject } from '../../services/car.subject';
import { Subscription } from 'rxjs';
import { PropertySubject } from '../../services/property.subject';
import {PropertyMatrix} from '../../_models/matrix.model';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit, OnDestroy {
  car: Car;
  properties: PropertyMatrix;
  private carSubscription: Subscription = null;
  private propertySubscription: Subscription = null;
  constructor(
    private carSubject: CarSubject,
    private propertySubject: PropertySubject
  ) { }

  ngOnInit() {
    this.SubscribeOnEvents();
  }

  SubscribeOnEvents() {
    this.carSubscription = this.carSubject.getCar().subscribe(res => {
     this.car = res;
    });
    this.propertySubscription = this.propertySubject.getData().subscribe(res => {
      this.properties = res;
    });
  }

  ngOnDestroy() {
    if (Boolean(this.carSubscription)) {
      this.carSubscription.unsubscribe();
    }
    if (Boolean(this.propertySubscription)) {
      this.propertySubscription.unsubscribe();
    }
  }

}
