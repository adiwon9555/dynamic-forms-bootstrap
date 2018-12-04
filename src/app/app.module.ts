import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DynamicFormBootstrapModule} from 'dynamic-form-bootstrap'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
