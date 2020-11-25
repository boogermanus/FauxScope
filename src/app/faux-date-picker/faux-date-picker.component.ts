import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faux-date-picker',
  templateUrl: './faux-date-picker.component.html',
  styleUrls: ['./faux-date-picker.component.css']
})
export class FauxDatePickerComponent implements OnInit {

  // 1 to 12
  months: number[] = [...Array(12).keys()].map(i => i + 1);

  constructor() { }

  ngOnInit(): void {

  }

}
