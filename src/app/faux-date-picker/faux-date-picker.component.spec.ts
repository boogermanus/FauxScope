import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectChange } from '@angular/material/select';

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

  it('onMonthSelected should load days', () => {
    component.onMonthSelected(1);
    expect(component.days).toBeDefined();
  });

  it('onMonthSelected should enable birthDate', () => {
    component.onMonthSelected(1);
    expect(component.birthDay.disabled).toBeFalse();
  });

  it('onDateSelected should emit when called', () => {
    spyOn(component.selections, 'emit');

    component.birthDay.value = 1;
    component.onDateSelected(1);

    expect(component.selections.emit).toHaveBeenCalledWith({
      month: 1,
      day: 1
    });

  });
});
