import { Injectable } from '@angular/core';
import { Car } from '../_models/car.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CarSubject {
  private carSubject: Subject<Car>;

  constructor() {
    this.carSubject = new Subject<Car>();
  }

  public setCar(car: Car) {
    this.carSubject.next(car);
  }

  public getCar(): Observable<Car> {
    return this.carSubject.asObservable();
  }
}
