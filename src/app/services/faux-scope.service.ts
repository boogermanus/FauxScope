import { Injectable } from '@angular/core';
import { IScope } from '../models/iscope';
import {fauxscopes} from '../data/fauxscopes';

@Injectable({
  providedIn: 'root'
})
export class FauxScopeService {
  fauxScopes: IScope[] = fauxscopes;
  constructor() { }

  public getFauxScopes(birthDate: Date): IScope[]
  {
    return [fauxscopes[0], fauxscopes[1]];
  }
}
