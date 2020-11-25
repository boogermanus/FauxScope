import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  public readonly thirtyDayMonths = [4, 6, 9, 11];
  public readonly thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];
  public readonly twentyNineDayMonth = 2;
  constructor() { }

  public getDays(month: number): number {

    if (this.isTwentyNineDayMonth(month)) {
      return 29;
    }

    if (this.isThirtyDayMonth(month)) {
      return 30;
    }

    if (this.isThirtyOneDayMonth(month)) {
      return 31;
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
