import { Component, Input, OnInit } from '@angular/core';
import { IScope } from '../models/iscope';

@Component({
  selector: 'app-faux-scope-view',
  templateUrl: './faux-scope-view.component.html',
  styleUrls: ['./faux-scope-view.component.css']
})
export class FauxScopeViewComponent implements OnInit {

  @Input()fauxScope: IScope;
  @Input()headerText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
