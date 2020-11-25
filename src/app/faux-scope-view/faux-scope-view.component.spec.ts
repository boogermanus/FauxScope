import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxScopeViewComponent } from './faux-scope-view.component';

describe('FauxScopeViewComponent', () => {
  let component: FauxScopeViewComponent;
  let fixture: ComponentFixture<FauxScopeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauxScopeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxScopeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
