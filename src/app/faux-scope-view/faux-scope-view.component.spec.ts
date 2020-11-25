import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IScope } from '../models/iscope';

import { FauxScopeViewComponent } from './faux-scope-view.component';

describe('FauxScopeViewComponent', () => {
  let component: FauxScopeViewComponent;
  let fixture: ComponentFixture<FauxScopeViewComponent>;
  const scope: IScope = {
    sign: 'test',
    signImageUrl: '',
    meaning: 'test meaning',
    duration: 1,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauxScopeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxScopeViewComponent);
    component = fixture.componentInstance;
    component.scope = scope;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-card-title equal to headerText', () => {
    component.headerText = 'test';
    fixture.detectChanges();
    const matCardTitle = fixture.nativeElement.querySelector('mat-card-title');

    expect(matCardTitle.textContent).toEqual(component.headerText);
  });

  it(`should have scopeName equal to ${scope.sign}`, () => {
    const h3 = fixture.nativeElement.querySelector('h1');

    expect(h3.textContent).toEqual(scope.sign);
  });

  it(`should have scopeMeaning equal to ${scope.meaning}`, () => {
    const element = fixture.nativeElement.querySelector('#meaning');

    expect(element.textContent).toEqual(scope.meaning);
  });

  // removed as it seemed pointless to show this for both scopes
  // as the duration is always the same
  // it(`should have scopeDuration equal to ${scope.duration} days`, () => {
  //   const element = fixture.nativeElement.querySelector('#duration');

  //   expect(element.textContent).toEqual(`${scope.duration} days`);
  // });
});
