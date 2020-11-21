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
    return [this.getAstrological(birthDate), this.getAstronomical(birthDate)];
  }

  private getAstrological(birthDate: Date): IScope {
    const day = birthDate.getDate();
    const month = this.getMonth(birthDate);

    return this.fauxScopes.find(faux => {
      if ((day >=  faux.astrologicalStartDay && month === faux.astrologicalStartMonth)
      || (day <= faux.astrologicalEndDay && month === faux.astrologicalEndMonth)) {
        return faux;
      }
    });
  }

  private getMonth(date: Date): number {
    return date.getMonth() + 1;
  }

  private getAstronomical(birthDate: Date): IScope {
    const day = birthDate.getDate();
    const month = this.getMonth(birthDate);
    
    let bestMatch = null;

    for (const faux of this.fauxScopes) {
      if ((day >=  faux.astronomicalStartDay && month === faux.astronomicalStartMonth)
      || (day <= faux.astronomicalEndDay && month === faux.astronomicalEndMonth)) {
        bestMatch = faux;
      }
    }

    return bestMatch;
  }
}
