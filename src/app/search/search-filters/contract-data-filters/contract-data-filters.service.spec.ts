import { TestBed } from '@angular/core/testing';

import { ContractDataFiltersService } from './contract-data-filters.service';

describe('ContractDataFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractDataFiltersService = TestBed.inject(ContractDataFiltersService);
    expect(service).toBeTruthy();
  });
});
