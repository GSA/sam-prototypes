import { TestBed } from '@angular/core/testing';

import { RegistrationFilterService } from './registration-filter.service';

describe('RegistrationFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationFilterService = TestBed.get(RegistrationFilterService);
    expect(service).toBeTruthy();
  });
});
