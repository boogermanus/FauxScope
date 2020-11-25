import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FauxDatePickerComponent } from './faux-date-picker/faux-date-picker.component';
import { MaterialModule } from './material.module';
import { FauxScopeViewComponent } from './faux-scope-view/faux-scope-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FauxDatePickerComponent,
    FauxScopeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
