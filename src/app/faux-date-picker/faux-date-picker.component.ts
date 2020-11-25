import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
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

  constructor(private daysService: DaysService) { }

  ngOnInit(): void {

  }

  onMonthSelected(select: MatSelectChange): void {
    this.days = this.daysService.getDays(select.source.value);
  }

}
