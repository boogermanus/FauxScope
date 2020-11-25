import { Component, Input, OnInit } from '@angular/core';
import { IScope } from '../models/iscope';

@Component({
  selector: 'app-faux-scope-view',
  templateUrl: './faux-scope-view.component.html',
  styleUrls: ['./faux-scope-view.component.css']
})
export class FauxScopeViewComponent implements OnInit {

  @Input()scope: IScope = {sign: 'test', meaning: 'test meaning', duration: 10, signImageUrl: 'assets/Leo.svg'}; // = null;
  @Input()headerText: string;

  public get scopeName(): string {
    return this.scope?.sign ?? '';
  }

  public get scopeMeaning(): string {
    return this.scope?.meaning ?? '';
  }

  public get scopeDuration(): number {
    return this.scope?.duration ?? 0;
  }

  public get scopeSignImageUrl(): string {
    return this.scope?.signImageUrl ?? '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
