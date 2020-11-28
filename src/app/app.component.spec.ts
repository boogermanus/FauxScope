import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'FauxScope'`, () => {
    expect(component.title).toEqual('FauxScope');
  });

  it('should have faux-date-picker', () => {
    const element = fixture.nativeElement.querySelector('app-faux-date-picker');
    expect(element).not.toBeNull();
  });

  it('should have faux-scope-viewer with id astrological', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astrological');
    expect(element).not.toBeNull();
  });

  it('should hide faux-scope-view astrological initially', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astrological');
    expect(element.hidden).toBeTrue();
  });

  it('should show faux-scope-view#astrological after onSelectionMade', () => {
    component.onSelectionMade({
      month: 1,
      day: 1
    });
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astrological');
    expect(element.hidden).toBeFalse();
  });

  it('should have faux-scope-viewer with id astronomical', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astronomical');
    expect(element).not.toBeNull();
  });

  it('should hide faux-scope-view astronomical initially', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astronomical');
    expect(element.hidden).toBeTrue();
  });

  it('should show faux-scope-view#astronomical after onSelectionMade', () => {
    component.onSelectionMade({
      month: 1,
      day: 1
    });
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astronomical');
    expect(element.hidden).toBeFalse();
  });

  it('should set astronomical when onSelectionMade is called', () => {
    component.onSelectionMade({month: 1, day: 1});
    expect(component.astronomical).not.toBeUndefined();
  });

  it('should set astrological when onSelectionMade is called', () => {
    component.onSelectionMade({month: 1, day: 1});
    expect(component.astrological).not.toBeUndefined();
  });

  it('should set noSelection to true onReset', () => {
    component.noSelection = false;
    component.onReset();

    expect(component.noSelection).toBeTrue();
  });
});
