import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { DaysService } from '../services/days-service';

@Component({
  selector: 'app-faux-date-picker',
  templateUrl: './faux-date-picker.component.html',
  styleUrls: ['./faux-date-picker.component.css']
})
export class FauxDatePickerComponent implements OnInit {

  // 1 to 12
  months: number[] = [...Array(12).keys()].map(i => i + 1);
  daysFilter: number[];
  constructor(private daysService: DaysService) { }

  ngOnInit(): void {

  }

  onMonthSelected(month: number): void {
    this.daysFilter = this.daysService.getDays(month);
  }

}
