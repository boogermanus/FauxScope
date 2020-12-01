import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly KEY = 'expanded';
  constructor() { }

  public save() {
    localStorage.setItem(this.KEY, 'false');
  }

  public get(): boolean {
    const collapse = localStorage.getItem(this.KEY);

    if (collapse === null) {
      return true;
    }

    return false;
  }
}
