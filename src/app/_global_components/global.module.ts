import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSubject } from '../services/car.subject';
import { CarInfoComponent } from './car-info/car-info.component';
import { ImpactComponent } from './impact/impact.component';
import { ProbabilityComponent } from './probability/probability.component';
import { MatrixComponent } from './matrix/matrix.component';
import { PropertySubject } from '../services/property.subject';
import { ManyCarsComponent } from './many-cars/many-cars.component';
import { ModalModule } from 'ngx-bootstrap';

const arrOfComponents = [
  CarInfoComponent,
  ImpactComponent,
  ProbabilityComponent,
  MatrixComponent,
  ManyCarsComponent
];

@NgModule({
  declarations: [
    ...arrOfComponents
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  providers: [
    CarSubject,
    PropertySubject
  ],
  exports: [
    ...arrOfComponents
  ]
})
export class GlobalModule { }
