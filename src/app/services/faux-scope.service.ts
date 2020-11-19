import { Injectable } from '@angular/core';
import { IScope } from '../models/iscope';
import { fauxscopes } from '../data/fauxscopes';
import { features } from 'process';

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

    for (const faux of this.fauxScopes) {
      if ((day >=  faux.astrologicalStartDay && month === faux.astrologicalStartMonth)
        || (day <= faux.astrologicalEndDay && month === faux.astrologicalEndMonth)) {
          return faux;
        }
    }
  }
}
