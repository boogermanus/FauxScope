import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faux-date-picker',
  templateUrl: './faux-date-picker.component.html',
  styleUrls: ['./faux-date-picker.component.css']
})
export class FauxDatePickerComponent implements OnInit {

  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() { }

  ngOnInit(): void {
  }

}
