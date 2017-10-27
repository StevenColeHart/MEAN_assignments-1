import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeOtdComponent } from './bike-otd.component';

describe('BikeOtdComponent', () => {
  let component: BikeOtdComponent;
  let fixture: ComponentFixture<BikeOtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeOtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeOtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
