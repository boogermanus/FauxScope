import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectChange } from '@angular/material/select';

import { FauxDatePickerComponent } from './faux-date-picker.component';

describe('FauxDatePickerComponent', () => {
  let component: FauxDatePickerComponent;
  let fixture: ComponentFixture<FauxDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FauxDatePickerComponent]
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

  it('onDaySelected should emit when called', () => {
    spyOn(component.selectionMade, 'emit');

    component.month = 1;
    component.onDaySelected(1);

    expect(component.selectionMade.emit).toHaveBeenCalledWith({
      month: 1,
      day: 1
    });
  });

  it('onInputsReset should emit when called', () => {
    spyOn(component.inputsReset, 'emit');

    component.onInputsReset();

    expect(component.inputsReset.emit).toHaveBeenCalled();
  });

  it('onInputsReset should change month to undefined', () => {
    component.month = 1;
    component.onInputsReset();
    expect(component.month).toBeUndefined();
  });

  it('onInputsReset should change day to undefined', () => {
    component.day = 1;
    component.onInputsReset();
    expect(component.day).toBeUndefined();
  });

  it('should have button reset', () => {
    const button = fixture.nativeElement.querySelector('button#reset');

    expect(button).not.toBeNull();
  });
});
