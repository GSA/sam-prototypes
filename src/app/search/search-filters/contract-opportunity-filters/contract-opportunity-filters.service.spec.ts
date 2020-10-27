import { TestBed } from '@angular/core/testing';

import { ContractOpportunityFiltersService } from './contract-opportunity-filters.service';

describe('ContractOpportunityFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractOpportunityFiltersService = TestBed.inject(ContractOpportunityFiltersService);
    expect(service).toBeTruthy();
  });
});
