import { TestBed } from '@angular/core/testing';

import { SystemAccountFiltersService } from './system-account-filters.service';

describe('SystemAccountFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemAccountFiltersService = TestBed.inject(SystemAccountFiltersService);
    expect(service).toBeTruthy();
  });
});
