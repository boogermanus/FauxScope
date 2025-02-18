import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FauxScopeViewComponent } from './faux-scope-view/faux-scope-view.component';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FauxDatePickerComponent } from './faux-date-picker/faux-date-picker.component';
import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { MatExpansionModule } from '@angular/material/expansion';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatExpansionModule
      ],
      declarations: [
        AppComponent,
        AboutComponent,
        FauxScopeViewComponent,
        FauxDatePickerComponent
      ],
    }).compileComponents();
  });

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

  it('should have faux-scope-viewer with id astronomical', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astronomical');
    expect(element).not.toBeNull();
  });

  it('should hide faux-scope-view astronomical initially', () => {
    const element = fixture.nativeElement.querySelector('app-faux-scope-view#astronomical');
    expect(element.hidden).toBeTrue();
  });

  it('should have about', () => {
    const element = fixture.nativeElement.querySelector('app-about#about');
    expect(element).not.toBeNull();
  })

  describe('onSelectionMade()', () => {
    it('should show faux-scope-view#astrological after onSelectionMade', () => {
      component.onSelectionMade({
        month: 1,
        day: 1
      });
      fixture.detectChanges();
      const element = fixture.nativeElement.querySelector('app-faux-scope-view#astrological');
      expect(element.hidden).toBeFalse();
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

    it('should set astrological when onSelectionMade is called', () => {
      component.onSelectionMade({ month: 1, day: 1 });
      expect(component.astrological).not.toBeUndefined();
    });

    it('should set astronomical when onSelectionMade is called', () => {
      component.onSelectionMade({ month: 1, day: 1 });
      expect(component.astronomical).not.toBeUndefined();
    });
  });

  describe('onReset()', () => {
    it('should set noSelection to true onReset', () => {
      component.noSelection = false;
      component.onReset();

      expect(component.noSelection).toBeTrue();
    });
  });
});
