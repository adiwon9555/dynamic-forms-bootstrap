import { TestBed } from '@angular/core/testing';

import { DynamicFormBootstrapService } from './dynamic-form-bootstrap.service';

describe('DynamicFormBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormBootstrapService = TestBed.get(DynamicFormBootstrapService);
    expect(service).toBeTruthy();
  });
});
