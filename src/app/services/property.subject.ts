import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PropertyMatrix } from '../_models/matrix.model';

@Injectable()
export class PropertySubject {
  private propertySubject: Subject<PropertyMatrix>;

  constructor() {
    this.propertySubject = new Subject<PropertyMatrix>();
  }

  public setData(data: PropertyMatrix) {
    this.propertySubject.next(data);
  }

  public getData(): Observable<PropertyMatrix> {
    return this.propertySubject.asObservable();
  }
}
