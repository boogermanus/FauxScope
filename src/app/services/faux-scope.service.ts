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
    return [fauxscopes[0], fauxscopes[1]];
  }

  private getAstrological(birthDate: Date): IScope {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    return this.fauxScopes.find(fs => {
      return fs.astrologicalStartDay >= day &&
      fs.astrologicalStartMonth >= month &&
      fs.astrologicalEndDay <= day &&
      fs.astrologicalEndMonth <= month;
    });
  }
}
