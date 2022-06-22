import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityComponent } from './probability.component';

describe('ProbabilityComponent', () => {
  let component: ProbabilityComponent;
  let fixture: ComponentFixture<ProbabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.probabilityValues = ['one', 'two'];
    component.probability = 1;
    expect(component).toBeTruthy();
  });

  it('should show probability', () => {
    component.probabilityValues = ['one', 'two'];
    component.probability = 1;
    expect(component.GetValue()).toBe('one');
  });
});
