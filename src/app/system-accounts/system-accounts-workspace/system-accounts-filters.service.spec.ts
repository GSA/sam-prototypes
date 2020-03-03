import { TestBed } from '@angular/core/testing';

import { SystemAccountsFiltersService } from './system-accounts-filters.service';

describe('SystemAccountsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemAccountsFiltersService = TestBed.get(SystemAccountsFiltersService);
    expect(service).toBeTruthy();
  });
});
