import { Component } from '@angular/core';
import { SignConstants } from './models/constants';
import { IFauxDatePickerSelection } from './models/ifaux-date-picker-selection';
import { IScope } from './models/iscope';
import { FauxScopeService } from './services/faux-scope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FauxScope';
  astrological: IScope;
  astronomical: IScope;
  show = false;
  public noSelection = true;

  constructor(private fauxScopeService: FauxScopeService) { }

  public onSelectionMade(selection: IFauxDatePickerSelection): void {
    const date = new Date();
    date.setDate(selection.day);
    date.setMonth(selection.month - 1);
    const result = this.fauxScopeService.getFauxScopes(date);

    this.astrological = result[SignConstants.Astrological];
    this.astronomical = result[SignConstants.Astronomical];
    this.noSelection = false;
  }
}
