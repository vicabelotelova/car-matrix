import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Matrix } from '../../_models/matrix.model';
import { Car } from '../../_models/car.model';
import { CarSubject } from '../../services/car.subject';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  @Input() matrix: Matrix;
  debugger
  modalRef: BsModalRef;
  cars: Car[] = [];
  constructor(
    private carSubject: CarSubject,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  public GetSize(length: number, arg?: number): string {
    let pixel = length * 48;
    pixel = arg ? pixel - arg : pixel;
    return `${pixel}${'px'}`;
  }

  public GetCellBG(row: number, col: number): string {
    const green = '#92D050';
    const yellow = '#FFFF99';
    const orange = '#FAC06F';
    const pink = '#F57C85';
    const red = '#C00E1B';
    const colLength = this.matrix.GradationOfProbability.length - 1;
    const rowLength = this.matrix.GradationOfImpact.length - 1;
    if (!col) {
      return green;
    } else if (col === colLength) {
      return red;
    } else {
      if ((col) <= ((colLength / 2) - (rowLength - row)) + 1) {
        return yellow;
      }
      if ((col) > ((colLength / 2) - (rowLength - row)) + 4) {
          return pink;
      }
      return orange;
    }
  }

  public GetCarsInTheCell(column: number, row: number): string {
    const count = this.GetCarsCount(column, row);
    return `${'matrix-table-col '}${'matrix-table-col-'}${count > 5 ? 'many' : count}`;
  }

  public GetCars(column: number, row: number): Car[] {
    const colPercent = 100 / this.matrix.GradationOfProbability.length;
    const rowPercent = 100 / this.matrix.GradationOfImpact.length;
    const col = this.matrix.GradationOfProbability.length - column;
    const ro = this.matrix.GradationOfImpact.length - row;
    return this.matrix.Cars.filter(car =>
      car.Impact <= ((ro) * rowPercent) && car.Impact >= ((ro - 1) * rowPercent)
      && car.Probability <= ((column + 1) * colPercent) && car.Probability >= ((column) * colPercent)
    );
  }

  public GetCarTooltip(car: Car): string {
    return `${'Category: '}${car.Category}${',Title: '}${car.Title}`;
  }

  public GetCarsCount(column: number, row: number): number {
    return this.GetCars(column, row).length;
  }

  public OnCarClick(car: Car) {
    this.carSubject.setCar(car);
  }

  public ShowCars(column: number, row: number, template: TemplateRef<any>) {
    this.cars = this.GetCars(column, row);
    const config = {
      backdrop: true,
      ignoreBackdropClick: true,
      class: `${'modal-'}${'md'}`
    };
    this.modalRef = this.modalService.show(template, config);
  }

  public OnCarClickFromModal(car: Car) {
    this.modalRef.hide();
    this.carSubject.setCar(car);
  }
}
