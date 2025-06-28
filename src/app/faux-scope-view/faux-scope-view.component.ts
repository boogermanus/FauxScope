import { Component, Input, OnInit } from '@angular/core';
import { IScope } from '../models/iscope';

@Component({
    selector: 'app-faux-scope-view',
    templateUrl: './faux-scope-view.component.html',
    styleUrls: ['./faux-scope-view.component.css'],
    standalone: false
})
export class FauxScopeViewComponent implements OnInit {

  @Input()scope: IScope = null;
  @Input()headerText: string;

  public get scopeName(): string {
    return this.scope?.sign ?? '';
  }

  public get scopeMeaning(): string {
    return this.scope?.meaning ?? '';
  }

  // removed for now
  // public get scopeDuration(): number {
  //   return this.scope?.duration ?? 0;
  // }

  public get scopeSignImageUrl(): string {
    return this.scope?.signImageUrl ?? '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
