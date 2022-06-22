import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import {Matrix, PropertyMatrix} from './_models/matrix.model';
import { PropertySubject } from './services/property.subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  matrix: Matrix = new Matrix();
  loading = true;
  constructor(
    private http: HttpService,
    private propeptySubject: PropertySubject
  ) {}

  ngOnInit() {
    this.GetData();
  }

  GetData() {
    this.http.get('cars-matrix.json').subscribe( (result: Matrix) => {
      this.matrix = result;
      this.propeptySubject.setData(new PropertyMatrix(result.GradationOfImpact, result.GradationOfProbability));
      this.loading = false;
    });
  }
}
