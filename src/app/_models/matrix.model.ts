import { Car } from './car.model';

export class PropertyMatrix {
  public GradationOfImpact: Array<string>;
  public GradationOfProbability: Array<string>;
  constructor(impact?: Array<string>, probability?: Array<string>) {
    this.GradationOfImpact = impact;
    this.GradationOfProbability = probability;
  }
}

export class Matrix extends PropertyMatrix {
  public Cars: Car[];
}
