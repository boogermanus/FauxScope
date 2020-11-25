import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { IFauxDatePickerSelection } from '../models/ifaux-date-picker-selection';
import { DaysService } from '../services/days-service';

@Component({
  selector: 'app-faux-date-picker',
  templateUrl: './faux-date-picker.component.html',
  styleUrls: ['./faux-date-picker.component.css']
})
export class FauxDatePickerComponent implements OnInit {

  // 1 to 12
  months: number[] = [...Array(12).keys()].map(i => i + 1);
  days: number[];
  month: number;
  @ViewChild('birthDay') birthDay: MatSelect;
  @Output() selections: EventEmitter<IFauxDatePickerSelection> = new EventEmitter<IFauxDatePickerSelection>();
  constructor(private daysService: DaysService) { }

  ngOnInit(): void {

  }

  onMonthSelected(month: number): void {
    this.days = this.daysService.getDays(month);
    this.birthDay.disabled = false;

    if (this.birthDay.value !== undefined) {
      this.onDaySelected(this.birthDay.value);
    }
  }

  public onDaySelected(day: number): void {
    this.selections.emit({
      month: this.month,
      day
    });
  }
}
