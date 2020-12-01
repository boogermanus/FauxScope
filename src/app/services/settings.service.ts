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
    const expanded = localStorage.getItem(this.KEY);

    if (expanded === null) {
      return true;
    }

    return expanded === 'true';
  }
}
