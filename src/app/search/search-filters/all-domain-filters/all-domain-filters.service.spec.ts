import { TestBed } from '@angular/core/testing';

import { AllDomainFiltersService } from './all-domain-filters.service';

describe('AllDomainFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllDomainFiltersService = TestBed.inject(AllDomainFiltersService);
    expect(service).toBeTruthy();
  });
});
