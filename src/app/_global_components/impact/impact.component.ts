import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {
  @Input() impact: number = 0;
  @Input() impactValues: Array<string> = new Array<string>(0);
  constructor() { }

  ngOnInit() {
  }


  public GetValue(): string {
    const length = this.impactValues.length;
    const part = Math.floor((length * this.impact) / 100) + 1;
    return this.impactValues[this.impactValues.length -  part];
  }

}
