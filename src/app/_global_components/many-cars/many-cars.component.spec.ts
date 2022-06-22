import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyCarsComponent } from './many-cars.component';

describe('ManyCarsComponent', () => {
  let component: ManyCarsComponent;
  let fixture: ComponentFixture<ManyCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
