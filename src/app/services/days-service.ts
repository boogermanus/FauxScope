import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  public readonly thirtyDayMonths = [4, 6, 9, 11];
  private readonly thirtyDayMonthResults: number[] = [...Array(30).keys()].map(i => i + 1);
  public readonly thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];
  private readonly thirtyOneDayMonthResults: number[] = [...Array(31).keys()].map(i => i + 1);
  public readonly twentyNineDayMonth = 2;
  private readonly twentyNineDayMonthResults: number [] = [...Array(29).keys()].map(i => i + 1);

  constructor() { }

  public getDays(month: number): number[] {

    if (this.isTwentyNineDayMonth(month)) {
      return this.twentyNineDayMonthResults;
    }

    if (this.isThirtyDayMonth(month)) {
      return this.thirtyDayMonthResults;
    }

    if (this.isThirtyOneDayMonth(month)) {
      return this.thirtyOneDayMonthResults;
    }
  }

  private isTwentyNineDayMonth(month: number): boolean {
    return month === this.twentyNineDayMonth;
  }

  private isThirtyDayMonth(month: number): boolean {
    return this.thirtyDayMonths.findIndex(i => i === month) !== -1;
  }

  private isThirtyOneDayMonth(month: number): boolean {
    return this.thirtyOneDayMonths.findIndex(i => i === month) !== -1;
  }
}
