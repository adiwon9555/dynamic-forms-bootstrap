import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBootstrapComponent } from './dynamic-form-bootstrap.component';

describe('DynamicFormBootstrapComponent', () => {
  let component: DynamicFormBootstrapComponent;
  let fixture: ComponentFixture<DynamicFormBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
