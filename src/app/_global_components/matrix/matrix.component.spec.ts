import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { MatrixComponent } from './matrix.component';
import { CarSubject } from '../../services/car.subject';
import { ManyCarsComponent } from '../many-cars/many-cars.component';
import { BsModalService, ComponentLoaderFactory, PositioningService } from 'ngx-bootstrap';
import { Car } from '../../_models/car.model';

describe('MatrixComponent', () => {
  let component: MatrixComponent;
  let fixture: ComponentFixture<MatrixComponent>;
  let testCarSubject: CarSubject;
  let testModalService: BsModalService;
  let componentCarSubject: CarSubject;
  let componentModalService: BsModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatrixComponent,
        ManyCarsComponent
      ],
      providers: [
        CarSubject,
        BsModalService,
        ComponentLoaderFactory,
        PositioningService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testCarSubject = TestBed.get(CarSubject);
    componentCarSubject = fixture.debugElement.injector.get(CarSubject);
    testModalService = TestBed.get(BsModalService);
    componentModalService = fixture.debugElement.injector.get(BsModalService);
  });

  it('should create', () => {
    component.matrix = {
      GradationOfProbability: [
        "Risk eliminated",
        "Low",
        "Rather low"
      ],
      GradationOfImpact: [
        "Critical",
        "Very hight"
      ],
      Cars: [
        {
          "Category": "Van",
          "Title": "Car #1",
          "Description": "Description of Car #1",
          "Probability": 10,
          "Impact": 41.6,
          ImpactHandling: 'some impact handling text'
        },
        {
          "Category": "Van",
          "Title": "Car #2",
          "Description": "Description of Car #2",
          "Probability": 31.25,
          "Impact": 58.3,
          ImpactHandling: 'some impact handling text'
        }
      ]
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should inject CarSubject', () => {
    inject([CarSubject], (injectService: CarSubject) => {
      expect(injectService).toBe(testCarSubject);
    })
  });

  it('should inject BsModalService', () => {
    inject([CarSubject], (injectService: BsModalService) => {
      expect(injectService).toBe(testModalService);
    })
  });

  it('should return color', () => {
    component.matrix = {
      GradationOfImpact: ['Any', 'Any'],
      GradationOfProbability: ['Any', 'Any'],
      Cars: [
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        }
      ]
    };
    expect(component.GetCellBG(1, 1)).toBe('#C00E1B');
    fixture.detectChanges();
  });

  it('should return frameStyle', () => {
    expect(component.GetSize(2)).toBe('96px');
    fixture.detectChanges();
  });

  it('should return GetCarsInTheCell', () => {
    component.matrix = {
      GradationOfImpact: ['Any', 'Any'],
      GradationOfProbability: ['Any', 'Any'],
      Cars: [
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        }
      ]
    };
    expect(component.GetCarsInTheCell(1, 1)).toBe('matrix-table-col matrix-table-col-0');
    fixture.detectChanges();
  });

  it('should return GetCars', () => {
    component.matrix = {
      GradationOfImpact: ['Any', 'Any'],
      GradationOfProbability: ['Any', 'Any'],
      Cars: [
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'Two',
          Category: 'Track',
          Probability: 10,
          Impact: 90,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'Three',
          Category: 'Track',
          Probability: 80,
          Impact: 2,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        }
      ]
    };
    let result: Car[] = [];
    expect(component.GetCars(0, 1).length).toBe(1);
    fixture.detectChanges();
  });

  it('should return GetCars', () => {
    component.matrix = {
      GradationOfImpact: ['Any', 'Any'],
      GradationOfProbability: ['Any', 'Any'],
      Cars: [
        {
          Title: 'One',
          Category: 'Track',
          Probability: 1,
          Impact: 1,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'Two',
          Category: 'Track',
          Probability: 10,
          Impact: 90,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        },
        {
          Title: 'Three',
          Category: 'Track',
          Probability: 80,
          Impact: 2,
          Description: 'Some description',
          ImpactHandling: 'some impact handling text'
        }
      ]
    };
    expect(component.GetCarsCount(0, 1)).toBe(1);
    fixture.detectChanges();
  });
});
