import { NgModule } from '@angular/core';
import { DynamicFormBootstrapComponent } from './dynamic-form-bootstrap.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DynamicFormBootstrapComponent],
  imports: [
    BrowserModule
  ],
  exports: [DynamicFormBootstrapComponent]
})
export class DynamicFormBootstrapModule { }
