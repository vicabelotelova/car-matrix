import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CarInfoComponent } from './car-info.component';
import { ProbabilityComponent } from '../probability/probability.component';
import { ImpactComponent } from '../impact/impact.component';
import { CarSubject } from '../../services/car.subject';
import {PropertySubject} from '../../services/property.subject';

describe('CarInfoComponent', () => {
  let component: CarInfoComponent;
  let fixture: ComponentFixture<CarInfoComponent>;
  let testCarSubject: CarSubject;
  let testPropertySubject: PropertySubject;
  let componentCarSubject: CarSubject;
  let componentPropertySubject: PropertySubject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarInfoComponent,
        ProbabilityComponent,
        ImpactComponent
      ],
      providers: [
        CarSubject,
        PropertySubject
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testCarSubject = TestBed.get(CarSubject);
    componentCarSubject = fixture.debugElement.injector.get(CarSubject);
    testPropertySubject = TestBed.get(PropertySubject);
    componentPropertySubject = fixture.debugElement.injector.get(PropertySubject);
  });


  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should inject CarSubject', () => {
    inject([CarSubject], (injectService: CarSubject) => {
      expect(injectService).toBe(testCarSubject);
    })
  });

  it('should inject PropertySubject', () => {
    inject([PropertySubject], (injectService: PropertySubject) => {
      expect(injectService).toBe(testPropertySubject);
    })
  });
});
