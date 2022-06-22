import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-probability',
  templateUrl: './probability.component.html',
  styleUrls: ['./probability.component.scss']
})
export class ProbabilityComponent implements OnInit {
  @Input() probability: number = 0;
  @Input() probabilityValues: Array<string> = new Array<string>(0);
  constructor() { }

  ngOnInit() {
  }


  public GetValue(): string {
    const length = this.probabilityValues.length;
    const part = Math.floor((length * this.probability) / 100);
    return this.probabilityValues[part];
  }
}
