import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactComponent } from './impact.component';

describe('ImpactComponent', () => {
  let component: ImpactComponent;
  let fixture: ComponentFixture<ImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.impact = 2;
    component.impactValues = ['impact #1', 'impact #2', 'impact #3'];
    expect(component).toBeTruthy();
  });

  it('should get value', () => {
    component.impact = 2;
    component.impactValues = ['impact #1', 'impact #2', 'impact #3'];
    expect(component.GetValue()).toBe('impact #3');
  });
});
