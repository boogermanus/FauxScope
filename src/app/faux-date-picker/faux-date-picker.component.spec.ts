import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxDatePickerComponent } from './faux-date-picker.component';

describe('FauxDatePickerComponent', () => {
  let component: FauxDatePickerComponent;
  let fixture: ComponentFixture<FauxDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauxDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
