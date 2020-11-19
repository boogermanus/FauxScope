import { Injectable } from '@angular/core';
import { IScope } from '../models/iscope';
import { fauxscopes } from '../data/fauxscopes';

@Injectable({
  providedIn: 'root'
})
export class FauxScopeService {
  fauxScopes: IScope[] = fauxscopes;
  constructor() { }

  public getFauxScopes(birthDate: Date): IScope[] {
    return [this.getAstrological(birthDate), fauxscopes[1]];
  }

  private getAstrological(birthDate: Date): IScope {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    const faux = this.fauxScopes.find(fs =>
      (day >= fs.astrologicalStartDay ||
      day <= fs.astrologicalEndDay) &&
      (month === fs.astrologicalStartMonth ||
      month === fs.astronomicalEndMonth)
    );

    return faux;
  }
}
